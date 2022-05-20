import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import facther from '../../api';


const AddService = () => {
    const [imageURL, setImageURL] = useState('');
    console.log(imageURL);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

        const serviceData = {
            ...data,
            image : imageURL,
        }

        const res = await facther.post('add-service', serviceData);
        console.log(res);
        reset();
        setImageURL('');

    }

    const handleUploadImage = event => {
        const image = event.target.files[0];

        const formData = new FormData();
        formData.set("image", image);
        axios.post("https://api.imgbb.com/1/upload?key=a5113089964d5e5d5c59a49191f9efa6", formData)
        .then(res => {
            setImageURL(res.data.data.display_url)
        })
        .catch((error) => {
            console.log(error);
        })
    };

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
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Image</span>
                        </label>
                        <input type="file" class="input input-bordered" onChange={handleUploadImage} 
                        
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