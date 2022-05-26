import Card from "../UI/Card";

interface Props {
    children: string,
    style?: any
}

const Introduction = (props: Props) => {

    const introStyle = {
        width: '50%',
        textAlign: 'center',
        fontSize: '0.8rem',
        padding: '0.1rem 1rem',
        color: '#666',
        top: '1rem',
        position: props.style.position
    }

    return (
        <Card style={introStyle}>
            <p style={{fontWeight: 'bolder'}}>Introduction</p>
            <p>{props.children}</p>
        </Card>
    )
}

export default Introduction;