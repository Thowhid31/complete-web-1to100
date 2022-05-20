import React from 'react';
import { useForm } from 'react-hook-form';
import facther from '../../api';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const res = await facther.post('add-service', data);
        console.log(res);
        reset()

    }

    return (
        <div className='h-screen w-full flex justify-center items-center bg-accent'>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h1 className='text-2xl text-center'>Add Service</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>

                    

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Service Name</span>
                        </label>
                        <input type="text"  class="input input-bordered" 
                        {...register("serviceName")}
                        />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Service Charge</span>
                        </label>
                        <input type="text" class="input input-bordered" 
                        {...register("serviceCharge")}
                        />
                        
                    </div>
                    <div class="form-control mt-6">
                        <button type='submit' class="btn btn-primary" >Add Service</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;