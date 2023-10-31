const CommonTitle = ({title,subText}:{title: string, subText?: string}) => {
    return (
           <>
                <h3 className='text-3xl font-bold text-primary mb-2 text-center'>{title}</h3>
                {subText && <h5 className='text-lg font-medium text-secondary text-center'>{subText}</h5>}
            </>
    );
};

export default CommonTitle;