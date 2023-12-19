import classNames from 'classnames/bind';
import Button from '../../Layout/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onCLick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onCLick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
