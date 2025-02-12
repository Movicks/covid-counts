export interface Post {
  id: number
  title: string
  content: string
  dateCreated: string
  dateUpdated: string
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'The History of Lorem Ipsum',
    content:
      'Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum. This passage, translated as “On the ends of good and evil,” was used to demonstrate typographic layouts. Over centuries, it has evolved into a universal placeholder text in design and printing industries. '.repeat(
        2,
      ),
    dateCreated: '17/03/2021',
    dateUpdated: '05/02/2025',
  },
  {
    id: 2,
    title: 'Why Do We Use Lorem Ipsum?',
    content:
      'It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. Designers and developers use Lorem Ipsum to focus on visual elements without being influenced by actual content, ensuring an unbiased approach to layout and typography. '.repeat(
        2,
      ),
    dateCreated: '18/03/2021',
    dateUpdated: '06/02/2025',
  },
  {
    id: 3,
    title: 'The Origins of Lorem Ipsum',
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College, discovered its origins while researching obscure Latin words. He found that Lorem Ipsum comes from sections of Cicero’s work. '.repeat(
        2,
      ),
    dateCreated: '19/03/2021',
    dateUpdated: '07/02/2025',
  },
  {
    id: 4,
    title: 'Where Does Lorem Ipsum Come From?',
    content:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. This text was popularized by typesetters who needed a block of text to showcase typefaces. Since then, it has been used in publishing, graphic design, and digital applications worldwide, making it a staple of the industry. '.repeat(
        2,
      ),
    dateCreated: '20/03/2021',
    dateUpdated: '08/02/2025',
  },
  {
    id: 5,
    title: 'The Purpose of Lorem Ipsum',
    content:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. Some injected humor, random words, or even generated nonsense have crept in, making certain versions unreadable. However, its core purpose remains unchanged: to provide an unbiased text for layout and design purposes. '.repeat(
        2,
      ),
    dateCreated: '21/03/2021',
    dateUpdated: '09/02/2025',
  },
  {
    id: 6,
    title: 'How Lorem Ipsum Became Popular',
    content:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'. This makes it look like readable English, without distracting the viewer. With the rise of digital design tools, Lorem Ipsum has become an essential part of wireframing and prototyping processes. ".repeat(
        2,
      ),
    dateCreated: '22/03/2021',
    dateUpdated: '10/02/2025',
  },
]
