import React from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  const { inputValue,  list, handleInputChange, handleBtnClick, handleItemDelete } = props
  return (
    <div style={{marginLeft: '10px', overflow: 'auto'}}>
      <div style={{marginTop: '10px'}}>
        <Input 
          value={inputValue}
          placeholder="todo info"
          style={{width: '300px', marginRight: '10px'}}
          onChange={handleInputChange}
        />
        <Button type="primary" onClick={handleBtnClick}>提交</Button>
      </div>
      <List
        size="small"
        style={{marginTop: '20px', width: '500px'}}
        bordered
        dataSource={list}
        renderItem={(item, index) => <List.Item onClick={() => {handleItemDelete(index)}}>{item}</List.Item>}
      />
    </div>
  )
}
export default TodoListUI
