'use client'

import React, { useState } from "react"
import { z, ZodSchema } from "zod";

export default function useFormHandle<Tform extends Record<string, string>>(schema: ZodSchema<Tform>, initialValues: Tform) {
    const [form, setForm] = React.useState(initialValues)
    const [fieldError, setFieldError] = useState<Partial<Record<keyof Tform, string>>>({})
    const [Loading, setLoading] = React.useState<boolean>(false);

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
        e.preventDefault();
        setLoading(true)
        try {
            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData.entries())
            schema.parse(data)
            alert("ini data" + JSON.stringify(data))
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
        } finally {
            setLoading(false)
        }
    }

    // function handleChange(field: keyof authForm) {
    //     return () => {
    //         if (!formRef.current) return;
    //         const formData = new FormData(formRef.current)
    //         const data = Object.fromEntries(formData.entries()) as authForm
    //         try {
    //             authSchema.parse(data)
    //             setFieldError({})
    //         } catch (error) {
    //             if (error instanceof z.ZodError) {
    //                 const fieldError: Record<string, string> = {}
    //                 error.errors.forEach((err) => {
    //                     if (err.path.length > 0) {
    //                         fieldError[err.path[0]] = err.message
    //                     }
    //                 })
    //                 setFieldError(fieldError)
    //             }
    //         }
    //     }
    // }

    return { fieldError, Loading, handleChange, handleSubmit }
}