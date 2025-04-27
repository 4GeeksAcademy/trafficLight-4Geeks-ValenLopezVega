export function Light(props) {
    const colorClass = {
        red: 'bg-danger',
        yellow: 'bg-warning',
        green: 'bg-success'
    };

    return (
        <div className={`light rounded-circle ${colorClass[props.color]} ${props.isActive ? 'shine' : '' }`}
        onClick={props.onClick}></div>
    );
};
