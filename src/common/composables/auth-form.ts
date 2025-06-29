'use client'

import React from "react"
import { z } from "zod";
import axios from "axios";
import { toast } from "react-toastify";

export default function useFormHandle<Tform extends Record<string, string>>(schema: z.ZodSchema<Tform>, initialValues: Tform, submited: (data: Tform) => Promise<void>) {
    const [form, setForm] = React.useState<Record<keyof Tform, string>>(initialValues)
    const [fieldError, setFieldError] = React.useState<Partial<Record<keyof Tform, string>>>({})
    const [Loading, setLoading] = React.useState<boolean>(false)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const updatedForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(updatedForm)
        try {
            schema.parse(updatedForm)
            setFieldError({})
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errors: Record<string, string> = {}
                error.errors.forEach((err) => {
                    if (err.path.length > 0) {
                        errors[err.path[0]] = err.message
                    }
                })
                setFieldError(errors as Partial<Record<keyof Tform, string>>)
            }
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        try {
            const formData = new FormData(e.currentTarget)
            const objectData = Object.fromEntries(formData.entries()) as Tform
            schema.parse(objectData)
            return await submited(objectData)
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errors: Record<string, string> = {}
                error.errors.forEach((err) => {
                    if (err.path.length > 0) {
                        errors[err.path[0]] = err.message
                    }
                })
                setFieldError(errors as Partial<Record<keyof Tform, string>>)
            }
            if (axios.isAxiosError(error)) {
                const message = error.response?.data.message
                toast(message, {
                    type: "error",
                    isLoading: Loading,
                    autoClose: 2000
                })
            }
        } finally {
            setLoading(false)
        }
    }

    return { fieldError, handleChange, Loading, handleSubmit }
}