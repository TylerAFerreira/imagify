import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    razorpay_logo,
    stripe_logo
}

export const stepsData = [
    {
      title: 'Décrivez votre vision',
      description: 'Tappez un phrase.',
      icon: step_icon_1,
    },
    {
      title: 'Regardez la magie',
      description: 'Note engine d\'IA transformera votre texte vers un image unique de bonne qualité.',
      icon: step_icon_2,
    },
    {
      title: 'Téléchargez et Partager',
      description: 'Téléchargez votre création et la partager avec le monde!',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Donald Jackman',
        role:'Designer Graphic',
        stars:5,
        text:`Excellent`
    },
    {
        image:profile_img_2,
        name:'Richard Nelson',
        role:'Créateur de Content',
        stars:5,
        text:`Fortement recommendé`
    },
    {
        image:profile_img_1,
        name:'Donald Jackman',
        role:' Designer Graphic',
        stars:5,
        text:`Fortement recommendé`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Pour les individus'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Pour les petites entreprises'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Pour les grandes entreprises'
    },
  ]