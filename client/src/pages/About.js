import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={'About us - Ecommerce'}>
        <div class="container my-container">
        <header class="text-center pb-4">
            <h1 class="my-header">Privacy Policy</h1>
        </header>

        <section class="my-section">
            <h2 class="my-heading">1. Introduction</h2>
            <p>Welcome to ShopShip's Privacy Policy. This policy outlines how we collect, use, and protect your personal information when you use our website and services.</p>
        </section>

        <section class="my-section">
            <h2 class="my-heading">2. Information We Collect</h2>
            <p>We may collect various types of information from you when you visit our website or use our services, including:</p>
            <ul>
                <li>Personal information such as name, email address, and contact details.</li>
                <li>Demographic information such as age, gender, and location.</li>
                <li>Payment information for processing transactions.</li>
                <li>Information from your interactions with our website and services.</li>
            </ul>
            <p>We use this information to improve your shopping experience, provide customer support, and send you relevant updates and promotions.</p>
        </section>

        <section class="my-section">
            <h2 class="my-heading">3. How We Use Your Information</h2>
            <p>We may use your information for the following purposes:</p>
            <ul>
                <li>Process and fulfill your orders.</li>
                <li>Send you order updates and shipment notifications.</li>
                <li>Respond to your inquiries and provide customer support.</li>
                <li>Improve our website and services based on your feedback.</li>
                <li>Send you marketing and promotional materials (you can opt-out anytime).</li>
                <li>Comply with legal obligations and prevent fraudulent activities.</li>
            </ul>
        </section>

        <section class="my-section">
            <h2 class="my-heading">4. Data Security</h2>
            <p>We take data security seriously and implement appropriate measures to protect your information from unauthorized access, disclosure, or alteration. However, please understand that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section class="my-section">
            <h2 class="my-heading">5. Third-Party Services</h2>
            <p>We may use third-party services to facilitate our business operations, such as payment processing and website analytics. These third-party services may have access to your information, but they are required to keep it confidential and use it only for the intended purpose.</p>
        </section>

        <section class="my-section">
            <h2 class="my-heading">6. Your Choices</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Review and update your personal information in your account settings.</li>
                <li>Opt-out of marketing communications.</li>
                <li>Request the deletion of your account and personal information (subject to legal requirements).</li>
            </ul>
        </section>
        </div>
    </Layout>
  )
}

export default About