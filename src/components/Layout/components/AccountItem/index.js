import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1630027277448197~c5_300x300.webp?x-expires=1702512000&x-signature=LyYkc9gOoknYdRZKhInewz7xDVQ%3D"
                alt="Tuan"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hoang Tuan</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('usename')}>Stark</span>
            </div>
        </div>
    );
}

export default AccountItem;
