import { type ReactNode } from 'react'
import { Handle, Position } from '@xyflow/react'

export default function CustomNode({ data }: { data: { label: string, pos: number, orientation: string, hasChildren: boolean } }): ReactNode {

    return (
        <div className='w-[150px] h-10 bg-black rounded-[6px] border border-sky-500'>
            {
                data.pos !== 0 && (
                    <Handle id={'a'} type='target' position={data.orientation === 'horizontal' ? Position.Left : Position.Top} />
                )
            }
            {
                data.pos !== 0 && data.orientation === 'horizontal' && (
                    <Handle id={'b'} type='target' position={Position.Top} />
                )
            }
            <div className='w-full h-full flex justify-center items-center'>
                <p className='text-sky-400 text-[0.9rem] capitalize'>{data.label}</p>
            </div>
            <Handle id={'c'} type='source' position={data.orientation === 'horizontal' ? Position.Right : Position.Bottom} />
            {
                data.hasChildren && (
                    <Handle id={'d'} type='source' position={Position.Bottom} />
                )
            }
        </div>
    )
}
