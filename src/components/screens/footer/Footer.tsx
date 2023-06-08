import Image from "next/image";
import style from "./Footer.module.scss";

import logoitem from "public/assets/logo/logo 3.png";
import FooterModal from "../footermodal/FooterModal";
import Linecont from "../linecont/Linecont";
import { Wrapper } from "../wraper/Wraper";

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <Wrapper>
          <div className={style.contentFoot}>
            <div className={style.content}>
              <div className="contentL">
                <FooterModal />
              </div>
              <div className={style.contentR}>
                <div className={style.linkTL}>
                  <h2>Проекты</h2>
                  <ul>
                    <li>
                      <a href="">Все проекты</a>
                    </li>
                    <li>
                      <a href="">ЖК 82-TOWERS</a>
                    </li>
                    <li>
                      <a href="">ЖК Второй проект</a>
                    </li>
                  </ul>
                </div>
                <div className={style.linkTR}>
                  <h2>Социальные сети</h2>
                  <ul>
                    <li>
                      <a href="">
                        <Image src={logoitem} width={15} alt="logo3" />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image src={logoitem} width={15} alt="logo3" />
                        Whatsapp
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image src={logoitem} width={15} alt="logo3" />
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Linecont />
            <div>
              <p>
                Архитектура проекта, изображения благоустройства, фасадов,
                интерьера, применяемых материалов, их нумерация, инфраструктура
                комплекса являются условными и могут быть изменены в ходе
                проектирования, строительства и эксплуатации в рамках
                положительного заключения государственной экспертизы.
              </p>
            </div>
          </div>
        </Wrapper>
      </footer>
    </>
  );
};

export default Footer;
