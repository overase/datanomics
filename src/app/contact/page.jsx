import { AddressCard } from './_components/AddressCard';
import style from './page.module.css';

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main className={style.contact}>
      <section className={`container ${style.contact_content}`}>
        <AddressCard />
      </section>
    </main>
  );
}
