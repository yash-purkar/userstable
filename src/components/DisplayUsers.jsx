import React from 'react'
import { useSelector } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai'
import { removeUser } from '../store/slices/UsersSlice'
import { useDispatch } from 'react-redux'

export const DisplayUsers = () => {
  const data = useSelector((state) => state.users);
  // console.log(data)
  const dispatch = useDispatch();

  const handleRemoveUser = (index) => {
    dispatch(removeUser({ index }))
  }
  return (
    <ul className='text-gray-500'>
      {
        data?.map((user, i) => <li key={i} className='flex justify-between items-center border border-white border-t-gray-300 py-3'>
          <div>
            <p>
              {user?.name}
            </p>
            <p>
              {user?.address}
            </p>
          </div>
          <button onClick={() => handleRemoveUser(i)} className='text-2xl text-red-500'><AiFillDelete /></button>
        </li>)
      }
    </ul>
  )
}
