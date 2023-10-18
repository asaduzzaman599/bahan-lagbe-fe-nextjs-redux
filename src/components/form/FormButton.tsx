"use client";
const FormButton = ({value}:{value:string}) => {
    return (
        <div>
            <button className='py-2 w-full bg-gray-900 text-sm font-bold text-white rounded' type='submit'>{value?value: 'Submit'}</button>
        </div>
    );
};

export default FormButton;