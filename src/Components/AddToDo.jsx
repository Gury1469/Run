import React from 'react'

export default function AddToDo() {
    return (
        <div>
            <form className='pt-4'>
                <div className='row'>
                    <div className='col-4'>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue="Add Task..."/>
                    </div>
                    <div className='col-6'>
                        <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className='col-2'>
                    <button type="button" class="btn btn-dark">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
