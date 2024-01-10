import {
  FaLocationDot,
  FaPhoneAlt,
  MdEmail
} from "@/app/_ui/icons/icons";

import style from './AddressCard.module.css';

const AddressCard = () => {
  return (
    <div className={style.address_card}>
      <h5 className={`${style.address_heading}`}>Information</h5>
      <div className={style.address_card_single}>
        <FaLocationDot className={style.icon} />
        <div className={style.address_card_single_right}>
          <h6 className={style.address_card_single_heading}>ADDRESS</h6>
          <p className={style.address_card_text}>
            13, Unity Close, Opposite Ogudu Police Station, Off Ogudu Road, Ojota, Lagos
          </p>
        </div>
      </div>
      <div className={style.address_card_single}>
        <FaPhoneAlt className={style.icon} />
        <div className={style.address_card_single_right}>
          <h6 className={style.address_card_single_heading}>PHONE</h6>
          <p className={style.address_card_text}>
            08033323907
          </p>
        </div>
      </div>
      <div className={style.address_card_single}>
        <MdEmail className={style.icon} />
        <div className={style.address_card_single_right}>
          <h6 className={style.address_card_single_heading}>E-MAIL</h6>
          <p className={style.address_card_text}>
            booking@datanomicsnigeria.com
          </p>
        </div>
      </div>
    </div>
  );
};
 
export { AddressCard };
  