"use client"

import { institutions, type Institution } from "@/db/schema"
import { type DataTableRowAction } from "@/types"
import { type ColumnDef } from "@tanstack/react-table"
import { Ellipsis } from "lucide-react"
import * as React from "react"

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { formatDate, toTitleCase } from "@/lib/utils"
import { getDeliveryStatusIcon } from "../_lib/utils"

interface GetColumnsProps {
  setRowAction: React.Dispatch<
    React.SetStateAction<DataTableRowAction<Institution> | null>
  >
}

export function getColumns({
  setRowAction,
}: GetColumnsProps): ColumnDef<Institution>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-0.5"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-0.5"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "institutionNumber",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Institution Number" />
      ),
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("institutionNumber")}</div>
      ),
    },
    {
      accessorKey: "shopifyInstitutionId",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Shopify Institution ID" />
      ),
      cell: ({ row }) => (
        <div className="truncate">{row.getValue("shopifyInstitutionId")}</div>
      ),
    },
    {
      accessorKey: "deliveryStatus",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Delivery Status" />
      ),
      cell: ({ row }) => {
        const deliveryStatus = institutions.deliveryStatus.enumValues.find(
          (status) => status === row.original.deliveryStatus
        )

        if (!deliveryStatus) return null

        const Icon = getDeliveryStatusIcon(deliveryStatus);

        return (
          <div className="flex w-[6.25rem] items-center">
            <Icon
              className="mr-2 size-4 text-muted-foreground"
              aria-hidden="true"
            />
            <span>{toTitleCase(deliveryStatus)}</span>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id))
      },
    },
    
    // and other fields here...
    
    {
      id: "actions",
      cell: function Cell({ row }) {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label="Open menu"
                variant="ghost"
                className="flex size-8 p-0 data-[state=open]:bg-muted"
              >
                <Ellipsis className="size-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem
                onSelect={() => setRowAction({ row, type: "update" })}
              >
                Edit Institution
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => setRowAction({ row, type: "delete" })}
                className="text-destructive"
              >
                Delete Institution
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
      size: 40,
    },
  ]
}