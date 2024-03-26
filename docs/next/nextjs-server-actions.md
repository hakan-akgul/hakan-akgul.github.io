# Select data from one component and use it in another via server actions without forms

Select data from the list and send to parent component via props  

::: code-group
``` tsx{1} [src/components/dashboard/data-filter.tsx]
'use client'

interface Props {
    data: string[]
    setUser: (memberInfo: string) => void
}

export function DataFilter(props: Props) {

    async function handleSetUser(user: string) {
        props.setUser(user)
    }

    return (
        <div>
            {
                props.data.map((item, index) => (
                    <p
                        className="cursor-pointer"
                        key={ index }
                        onSelect={ handleSetUser }>
                        { item }
                    </p>
                ))
            }
        </div>
    )
}
```
:::

Server action will get data from dynamic api route  

::: code-group
``` ts{1} [src/lib/actions.ts]
'use server'

import { fetchData } from '@/lib/utils-server'
import { Route } from 'next'

export async function getMemberInfo(user: string) {
    const memberInfo = await fetchData<string[]>('/api/mock/member/info/' + user as Route)

    return memberInfo
}
```
:::

DataTable will be updated after selecting data from DataFilterWrapper  

::: code-group
``` tsx{8,14,18} [src/app/member-info/page.tsx]
import { getMemberInfo } from '@/lib/actions'
import { fetchData } from '@/lib/utils-server'
import { revalidatePath } from 'next/cache'

import { DataFilter } from '~/dashboard/data-filter'
import DataTable from '~/dashboard/data-table/data-table'

let memberInfo: DataMember[] = []

async function DataFilterWrapper() {
    const members = await fetchData<string[]>('/api/mock/member/list')

    async function getUser(memberName: string) {
        'use server'

        memberInfo = await getMemberInfo(memberName)

        revalidatePath('/') // interestingly leaving here as root path is faster download
    }

    return (
        <DataFilter
            data={ members }
            setUser={ getUser }/>
    )
}

export default function PageMemberInfo() {
    return (
        (
            <>
                <DataFilterWrapper/>
                <DataTable
                    data={ memberInfo }
                    disableCheckbox
                    filterType="date"/>
            </>
        )
    )
}
```
:::
