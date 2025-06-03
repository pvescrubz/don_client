import Image from "next/image"
import { ButtonLink } from "../../ui/Button/ButtonLink"
import { Container } from "../../ui/containers/Container/Container"
import { Section } from "../../ui/containers/Section/Section"
import styles from "./AddBalanceFake.module.css"

export const AddBalanceFake = () => {
  return (
    <Section className={styles.root}>
      <Container className={styles.container}>
        <Image src="/images/addbalancefake.png" alt="alt" width={1420} height={858} className={styles.image} />
        <ButtonLink size="small" variant="primary" href="/skins/cs2" className={styles.btn}>Купить скины</ButtonLink>
      </Container>
    </Section>
  )
}