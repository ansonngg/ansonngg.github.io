import Icon from './Icon';
import './IconButton.scss';

export default function IconButton(props: { name: string; link: string }) {
    return (
        <a className="icon-button" href={props.link}>
            <Icon name={props.name} size={32} />
        </a>
    );
}
