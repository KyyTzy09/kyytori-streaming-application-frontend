import { DropdownMenu } from '@/common/shadcn/dropdown-menu'
import { User } from '@/common/types/user'
import React from 'react'

interface AvatarDropDownProps {
    data : User
}

export default function AvatarDropDown({data} : AvatarDropDownProps) {
  return (
    <DropdownMenu>
      
    </DropdownMenu>
  )
}
