import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../../../Image';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/78eff7a2436c92e1cee84b08694d1066~c5_300x300.webp?x-expires=1702814400&x-signature=tCcaHeERfvOgx90jeGPnILFJf4E%3D"
                alt="Tuan"
            ></Image>
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
