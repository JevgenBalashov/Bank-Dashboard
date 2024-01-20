import React from "react";
import styles from "./Card.module.scss";
import { ReactComponent as PayChip } from "../../../assets/Svg/Card/PayChip.svg";
import { ReactComponent as MasterCard } from "../../../assets/Svg/Card/MasterCard.svg";

function CardComponent({ cardContainerStyle, cardBodyStyle, fillOfChip, textBalance, textPrice, cardHolder, cardName, valid, dataValid, balanceChipStyle, balanceStyle, validCardNameStyle, vcnBoxStyle, fillOfMastercard, cardNumberStyle }) {
  return (
    <div className={`${styles.CardContainer}`} style={cardContainerStyle}>
      <div className={`${styles.CardBody}`} style={cardBodyStyle}>
        <div className={`${styles.BalanceChip}`} style={balanceChipStyle}>
          <div className={`${styles.Balance}`} style={balanceStyle}>
            <div className={`${styles.Balance}`} style={textBalance}>Balance</div>
            <div className={`${styles.Price}`} style={textPrice}>$5,756</div>
          </div>
          <PayChip className={`${styles.ChipSvg}`} style={fillOfChip}/>
        </div>
        <div className={`${styles.ValidCardName}`} style={validCardNameStyle}>
          <div className={`${styles.VCNbox}`} style={vcnBoxStyle}>
            <div className={`${styles.CardHolderInfo}`} style={cardHolder}>CARD HOLDER</div>
            <div className={`${styles.CardName}`} style={cardName}>Eddy Cusuma</div>
          </div>
          <div className={`${styles.VCNbox}`} style={vcnBoxStyle}>
            <div className={`${styles.Valid}`} style={valid}>VALID THRU</div>
            <div className={`${styles.Data}`} style={dataValid}>12/22</div>
          </div>
        </div>
        <div className={`${styles.CardNumber}`} style={cardNumberStyle}>
          <div>3778 **** **** 1234</div>
          <MasterCard className={`${styles.McSvg}`} style={fillOfMastercard}/>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
