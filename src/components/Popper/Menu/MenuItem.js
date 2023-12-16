import classNames from 'classnames';
import Button from '../../Layout/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onCLick }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onCLick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
