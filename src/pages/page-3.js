import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Paragraph = styled.p`
  max-width: 75%;
  line-height: 1.47;
  font-size: 1.2em;
  text-indent: 1.43em;
  @media all and (max-width: 800px) {
    max-width: 95%;
  }
  @media all and (max-width: 500px) {
    max-width: 100%;
  }
`

const Heading = styled.h1`
  font-size: 1.89em;
  font-weight: 500;
`

const SecondPage = () =>
  <div>
    <Heading>Hello to you, three!</Heading>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id maiores eius
      rerum unde rem animi distinctio voluptatem tenetur, accusantium, incidunt
      beatae, ex deserunt architecto autem. Blanditiis possimus impedit
      accusamus non. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Eos tempore deserunt culpa ad facilis voluptate placeat beatae nostrum,
      nemo necessitatibus accusantium, ex cumque repellat neque officiis fugit,
      esse ipsa ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Itaque eius labore aperiam eligendi nam tempora repudiandae pariatur
      repellendus eveniet illum, libero aliquam placeat ducimus qui cumque sint
      molestiae odit quod! Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Officia deserunt repudiandae quod quibusdam, nam odit consequatur
      est quidem voluptas libero! Aspernatur tempore et nulla libero!
      Exercitationem error praesentium numquam iste. Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Explicabo cum voluptatibus temporibus iure,
      voluptatem iusto, accusantium natus dolores neque, omnis sequi dolor
      labore. Suscipit non earum ea impedit libero eum. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Sed inventore odio optio nemo
      dignissimos veritatis, labore dolores explicabo, dolore tenetur laudantium
      rem quisquam neque sapiente iste quaerat doloremque consectetur? Facilis.
    </Paragraph>
  </div>
export default SecondPage
