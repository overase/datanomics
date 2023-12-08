import { AddressCard } from './components/AddressCard';
import style from './page.module.css';


export default function Contact() {
  return (
    <main className={style.contact}>
      <section className={`container ${style.contact_content}`}>
        <AddressCard />
      </section>
    </main>
  );
}
