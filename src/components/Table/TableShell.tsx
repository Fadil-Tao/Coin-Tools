import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table';

interface ReactTableProps<TData> {
    data: TData[];
    columns: ColumnDef<TData, any>[];
    globalFilter: string;
}
const TableShell = <T extends object>({ data, columns, globalFilter }: ReactTableProps<T>) => {
    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
        },
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div>
            <table className='text-white my-2  w-full'>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => {
                        return (
                            <tr key={headerGroup.id} className='text-2xl'>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} className='p-6'>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext(),
                                        )}
                                    </th>
                                ))}
                            </tr>
                        );
                    })}
                </thead>
                <tbody>
                    {table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map((row) => {
                            return (
                                <tr
                                    className='hover:bg-slate-600 border-y-[1.5px] border-[#01E4D9]'
                                    key={row.id}
                                >
                                    {row.getVisibleCells().map((cells) => (
                                        <td className='px-3.5 py-4 font-semibold text-lg'>
                                            {flexRender(
                                                cells.column.columnDef.cell,
                                                cells.getContext(),
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td>No record Found Nigga</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className='flex items-center md:justify-end mt-2 gap-2 text-white font-semibold '>
                <button
                    onClick={() => {
                        table.previousPage();
                    }}
                    disabled={!table.getCanPreviousPage()}
                    className='p-1 text-[#01E4D9] text-lg disabled:opacity-30'
                >
                    {'<'}
                </button>

                <button
                    onClick={() => {
                        table.nextPage();
                    }}
                    disabled={!table.getCanNextPage()}
                    className='p-1 text-[#01E4D9] text-lg disabled:opacity-30'
                >
                    {'>'}
                </button>
                <span className='flex items-center gap-1 flex-wrap'>
                    <div>Page</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                    </strong>
                </span>
                <span className='flex items-center gap-1 flex-wrap'>
                    <span className='text-[#01E4D9]'>|</span> Go to page :
                    <input
                        type='number'
                        defaultValue={0}
                        className='border p-1 rounded  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-16 bg-transparent  border-[#01E4D9]'
                        onChange={(e) => {
                            const page: number = e.target.value ? Number(e.target.value) - 1 : 0;
                            table.setPageIndex(page);
                        }}
                    />
                </span>
                <select
                    name='page'
                    id='page'
                    className='p-2 bg-transparent border border-[#01E4D9]'
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => {
                        table.setPageSize(Number(e.target.value));
                    }}
                >
                    {[10,25,50,100].map((pageSizes) => (
                        <option
                            key={pageSizes}
                            value={pageSizes}
                            className='text-white bg-zinc-700  border-0'
                        >
                            show {pageSizes}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default TableShell;
