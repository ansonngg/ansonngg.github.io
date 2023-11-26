import './ImageButton.scss';

export default function ImageButton(props: { image: string; link: string }) {
    return (
        <a className="image-button" href={props.link}>
            <img src={props.image} alt={props.image.replace(/\.[^/.]+$/, '')} />
        </a>
    );
}
