/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import MaterialTable, { MTableToolbar, MTableHeader } from 'material-table'
import { tableIcons } from './tableIcons'
import { AddBox } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { switchColumns } from '../../_action/table_action'
import { columnOptions } from './column_data'

const Table = ({ beerList, addBeer }) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.table)
  const columnArr = columnOptions.map((option) => {
    for (let i = 0; i < state.columns.length; i++) {
      if (option.title === state.columns[i]) {
        return option
      }
    }
  })
  const [columns, setColumns] = useState(columnArr)
  // 바뀐 인덱스를 받아서 정렬된 순으로 title만 action으로 보내는 함수
  let savedColumns = columns
  function handleColumnDrag(sourceIndex, destinationIndex) {
    const sourceColumn = savedColumns[sourceIndex]
    const destinationColumn = savedColumns[destinationIndex]
    // Swapping the column order
    savedColumns[sourceIndex] = destinationColumn
    savedColumns[destinationIndex] = sourceColumn
    const filtered = savedColumns.map((el) => {
      return el.title
    })
    console.log(filtered)
    dispatch(switchColumns(filtered))
    setColumns(savedColumns)
  }

  // useEffect(() => {
  //   resource.fetchHeaderOrder((order) => {
  //     // updateHeaderOrder(order)
  //     console.log()
  //   })
  // }, [resource])
  return (
    <MaterialTable
      title="Bear List"
      columns={[...columns]}
      onColumnDragged={handleColumnDrag}
      data={beerList}
      actions={[
        {
          title: 'add to cart',
          icon: AddBox,
          iconProps: {
            style: {
              width: '120px',
              fontSize: 'small',
              cursor: 'pointer',
            },
            width: 100,
          },
          tooltip: 'Save Beer',
          onClick: (event, rowData) => {
            addBeer(rowData)
          },
        },
      ]}
      components={{
        // Action: (props) => (
        //   <div
        //     style={{
        //       whiteSpace: 'nowrap',
        //       width: '100px',
        //       textAlign: 'center',
        //     }}
        //   >
        //     <AddBox {...props} />
        //   </div>
        // ),
        Header: (props) => <MTableHeader {...props} />,
        Toolbar: (props) => (
          <div>
            <MTableToolbar {...props} />
            <div
              style={{
                padding: '20px',
                textAlign: 'left',
                display: 'flex',
              }}
            >
              <div
                style={{
                  padding: '10px 15px',
                  borderRadius: '8px',
                  background: '#efefef',
                  textAlign: 'center',
                  margin: '5px',
                  fontSize: '16px',
                }}
              >
                5 - 6
              </div>
              <div
                style={{
                  padding: '10px 15px',
                  borderRadius: '8px',
                  background: '#efefef',
                  textAlign: 'center',
                  margin: '5px',
                  fontSize: '16px',
                }}
              >
                7 - 8
              </div>
              <div
                style={{
                  padding: '10px 15px',
                  borderRadius: '8px',
                  background: '#efefef',
                  textAlign: 'center',
                  margin: '5px',
                  fontSize: '16px',
                }}
              >
                8 - 9
              </div>
            </div>
          </div>
        ),
      }}
      icons={tableIcons}
      options={{
        actionsColumnIndex: -1,
        sorting: true,
        pageSize: 10,
        pageSizeOptions: [10, 20],
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF',
          // padding: '4px 8px 4px 8px',
        },
      }}
      localization={{
        pagination: {
          labelDisplayedRows: '{from}-{to} of {count}',
        },
        toolbar: {
          nRowsSelected: '{0} row(s) selected',
        },
        header: {
          actions: 'Add Cart',
        },
        body: {
          emptyDataSourceMessage: 'No records to display',
          filterRow: {
            filterTooltip: 'Filter',
          },
        },
      }}
    />
  )
}

export default Table

// [
//         {
//           title: 'Image',
//           field: 'imageUrl',
//           headerStyle: {
//             textAlign: 'center',
//           },
//           cellStyle: {
//             textAlign: 'center',
//           },
//           render: (rowData) => (
//             <img
//               src={rowData.imageUrl}
//               style={{
//                 height: 40,
//               }}
//             />
//           ),
//         },
//         {
//           title: 'Name',
//           field: 'name',
//           width: 200,
//           cellStyle: {
//             minWidth: 180,
//             maxWidth: 180,
//           },
//         },
//         {
//           title: 'Tag Line',
//           field: 'tagline',
//           cellStyle: {
//             minWidth: 200,
//             maxWidth: 200,
//           },
//         },
//         {
//           title: 'Abv',
//           field: 'abv',
//           width: 90,
//           type: 'numeric',
//           cellStyle: {
//             textAlign: 'right',
//           },
//         },
//         {
//           title: 'Ibu',
//           field: 'ibu',
//           width: 90,
//           type: 'numeric',
//           cellStyle: {
//             textAlign: 'right',
//           },
//         },
//         {
//           title: 'Srm',
//           field: 'srm',
//           width: 90,
//           type: 'numeric',
//           cellStyle: {
//             textAlign: 'right',
//           },
//         },
//       ]
