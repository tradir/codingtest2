/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, forwardRef } from 'react'
import MaterialTable, { MTableToolbar } from 'material-table'
import axios from 'axios'
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from '@material-ui/icons'
import { Container, Wrapper } from './StyledBearList'
import { TextField } from '@material-ui/core'

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
}

const BearListWrapper = () => {
  const [bearList, setBearList] = useState([])
  const [filter, setFilter] = useState(null)

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers`)
      .then((res) => {
        const data = res.data.map((list) => {
          const data = {
            id: list.id,
            name: list.name,
            tagline: list.tagline,
            abv: list.abv,
            ibu: list.ibu,
            srm: list.srm,
            imageUrl: list.image_url,
            description: list.description,
            brewers_tips: list.brewers_tips,
            food_pairing: list.food_pairing,
          }

          return data
        })
        setBearList(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <Container>
      <Wrapper>
        <MaterialTable
          title="Bear List"
          columns={[
            {
              title: 'Image',
              field: 'imageUrl',
              headerStyle: {
                textAlign: 'center',
              },
              cellStyle: {
                textAlign: 'center',
              },
              render: (rowData) => (
                <img
                  src={rowData.imageUrl}
                  style={{
                    height: 40,
                  }}
                />
              ),
            },
            {
              title: 'Name',
              field: 'name',
              width: 200,
              cellStyle: {
                minWidth: 180,
                maxWidth: 180,
              },
            },
            {
              title: 'Tag Line',
              field: 'tagline',
              cellStyle: {
                minWidth: 200,
                maxWidth: 200,
              },
            },
            {
              title: 'Abv',
              field: 'abv',
              width: 90,
              type: 'numeric',
              cellStyle: {
                textAlign: 'right',
              },
            },
            {
              title: 'Ibu',
              field: 'ibu',
              width: 90,
              type: 'numeric',
              cellStyle: {
                textAlign: 'right',
              },
            },
            {
              title: 'Srm',
              field: 'srm',
              width: 90,
              type: 'numeric',
              cellStyle: {
                textAlign: 'right',
              },
            },
          ]}
          data={bearList}
          actions={[
            {
              icon: AddBox,
              iconProps: {
                style: { width: '90px', fontSize: 'small', color: 'green' },
              },
              tooltip: 'Save User',
              onClick: (event, rowData) => alert('You saved ' + rowData.name),
            },
          ]}
          components={{
            Action: (props) => (
              <div
                style={{
                  whiteSpace: 'nowrap',
                  width: '100px',
                  textAlign: 'center',
                }}
              >
                <AddBox />
              </div>
            ),
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
            },
          }}
          localization={{
            header: {
              actions: 'add to cart',
            },
          }}
        />
      </Wrapper>
    </Container>
  )
}

export default BearListWrapper
