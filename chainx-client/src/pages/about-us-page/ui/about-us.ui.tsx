import { FC } from 'react'
import styles from './about-us.module.scss'
import { Clock, Cpu, ShieldCheck } from 'lucide-react'

export const AboutUs: FC = () => {
  return (
    <div className={styles.root}>
      <h2>About Us</h2>
      <p>
        Hello! My name is Kali Shau, and I am the developer behind this website.
        <br />
      </p>
      <p>
        Building websites is not just my job—it's my passion. I believe that
        every project is an opportunity to create something unique, useful, and
        user-friendly.
      </p>

      <h3>Why Do I Do This?</h3>
      <p>
        I love turning ideas into reality through code. I pay attention to every
        detail to ensure that websites are not only functional but also visually
        appealing. My goal is to create products that solve clients' problems
        and provide a pleasant user experience.
      </p>

      <h3>What Do I Offer?</h3>
      <ul>
        <li>
          <ShieldCheck />A personalized approach to every project.
        </li>
        <li>
          <Cpu />
          Modern technologies and up-to-date solutions.
        </li>
        <li>
          <Clock />
          Support and updates after the launch.
        </li>
      </ul>

      <h3>Why Work With Me?</h3>
      <p>
        I value my clients' trust and always strive to deliver results that
        exceed expectations. If you have an idea, I’ll help bring it to life.
      </p>
      <p>
        Thank you for visiting this page! If you have any questions or would
        like to discuss a project, feel free to reach out—I’d be happy to
        collaborate!
      </p>
    </div>
  )
}
