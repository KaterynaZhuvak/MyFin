import { useEffect, type FC } from 'react';
import { useNavigate } from 'react-router';

export const PrivacyPolicyPage: FC = () => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='container py-[20px]'>
      <button
        className='mb-[20px] text-[24px] hover:text-hover-green tablet:text-[30px]'
        type='button'
        onClick={handleClick}
      >
        Go back
      </button>
      <h2 className='mb-[24px] text-center text-[24px] font-bold tracking-[0.01rem] tablet:mb-[40px] tablet:text-[40px]'>
        Privacy Policy
      </h2>
      <h3 className='mb-[10px] text-[20px] font-bold tracking-[0.01rem] tablet:mb-[15px] tablet:text-[30px]'>
        Last updated: July 26, 2024
      </h3>
      <p className='mb-[20px] text-justify text-[16px] font-normal leading-[24px] tablet:mb-[40px] tablet:text-[24px] tablet:leading-[36px]'>
        This privacy policy governs the information collection practices of
        MyFin. In particular, it defines the types of information we collect
        during the time you use our website MyFin, as well as how we use the
        information collected. Please read this Privacy Policy carefully. By
        accessing and using the Site, you agree that your use of the Site and
        any dispute or controversy relating to privacy, governed by this Privacy
        Policy.
      </p>
      <h3 className='mb-[10px] text-[20px] font-bold tracking-[0.01rem] tablet:mb-[15px] tablet:text-[30px]'>
        How we collect information
      </h3>
      <p className='mb-[20px] text-justify text-[16px] font-normal leading-[24px] tablet:mb-[40px] tablet:text-[24px] tablet:leading-[36px]'>
        We may collect, store and process personal and other information
        provided by you through the use of our Site. For example, MyFin may
        contact individuals who have applied for services, as well as
        individuals who have contacted us with their information, in order to
        receive an answer to their questions. MyFin collects personal
        identification information from our users through the pages of the Site,
        and from time to time other pages may appear that will collect similar
        information. In general, this information includes full name, phone
        numbers, email addresses, passwords, and employment information for the
        purposes of registering or selecting service options. Also, we collect
        and store information that is generated automatically as you move
        through the Site online. For example, we may collect information about
        your computer connection to the Internet, which, among other things,
        will allow us to improve the provision of access to our web pages for
        you and measure traffic on the site. The site may also automatically
        recognize and store information about the type the browser you are
        using; your Internet connection protocol address (&ldquo;IP
        address&ldquo;); time, date, and duration of the visit; as well as site
        visit. We also use a standard browser software feature called a
        &ldquo;cookie&ldquo; to improve your experience of visiting the Site.
        Cookies are small files that your web browser stores on your
        computer&quot;s hard drive for record keeping purposes. By showing how
        and when users use the Site, cookies help us determine how many unique
        users visit our site, track their trends and patterns, and may help us
        deliver advertising campaigns or other notifications. They may also
        exempt you from having to re-enter your preferences in certain areas of
        the Site where you have previously entered your information preferences.
        Cookies may be stored until you manually delete them or set your browser
        to refuse them. If you refuse to accept cookies, you may experience
        difficulty navigating the Website, or site performance may vary. The
        Site may also use web beacons (bit-by-bit graphic, also known as a
        &ldquo;clear GIF&ldquo;) to access cookies and count users who visit the
        Site or open HTML email messages. We may use information collected from
        you while you use the Site in a variety of ways, including using the
        information to customize features or advertisements that may be
        displayed on the Site. MyFin may also share the information you have
        provided with us with contractors who may use your information to
        contact you as a prospective client or with similar business intent. We
        may also share your information with third parties, such as data
        processors or other service providers or advertisers, in order to
        enhance your experience with us, the Site, or MyFin, or to provide you
        with information about related products and services. In case you do not
        want your information to be used for any of the purposes listed above,
        please send an email to: E-mail ekateribazuvak1@gmail.com and indicate
        the purposes for which you would like your information not to be used.
        Please allow us a reasonable period of time to remove your information
        for these purposes, and as such, termination of the use of information
        for these purposes may not be immediate. Moreover, MyFin may disclose
        your information to the extent required by law, or to such extent as we
        deem necessary to protect our legal interests. We reserve the right to
        cooperate with government agencies and disclose such information to
        comply with the requirements of the legal process. The Site may also
        include links to other websites or provide access to products and
        services offered by third parties whose privacy practices are not under
        our control. When you visit another website, or purchase goods or
        services from third parties, the use of any information you provide is
        governed by the privacy policy of the site you visit that provides such
        products or services, or that collects your information.
      </p>
      <h3 className='mb-[10px] text-[20px] font-bold tracking-[0.01rem] tablet:mb-[15px] tablet:text-[30px]'>
        Using Google Analytics Tools
      </h3>
      <p className='mb-[20px] text-justify text-[16px] font-normal leading-[24px] tablet:mb-[40px] tablet:text-[24px] tablet:leading-[36px]'>
        We may also use the advertiser functionality of Google&quot;s analysis
        tools (or similar services) to optimize our performance. Advertiser
        functionality includes: Re-marketing with Google analysis tools;
        Reporting on Google Display Network experiences; Integration with the
        DoubleClick platform (double click of the mouse); And Demographic
        reporting and Google analysis tools interest report Once Google
        Analytics features are enabled, we are required to notify visitors by
        disclosing information about the use of those features and that we and
        third-party cookies (such as Google analytics cookies) or other
        first-party identifiers, and third-party cookies third parties (such as
        a DoubleClick cookie) or other third party identifiers will collect data
        about your activities on our Site. Among other uses, this allows us to
        contact you if you start completing our verification form but stop doing
        so during the process. This contact may be made by means of an e-mail
        message with a reminder to complete the completion of your order. The
        &ldquo;Remarketing&ldquo; feature allows us to contact individuals who
        have previously visited our Website and match the correct audience with
        the correct advertising message. You may refuse the use of cookies by
        Google by visiting Google&quot;s advertising settings and/or you may
        refuse the use of cookies by third parties by visiting the Network
        Advertising Initiative opt-out page.
      </p>
      <h3 className='mb-[10px] text-[20px] font-bold tracking-[0.01rem] tablet:mb-[15px] tablet:text-[30px]'>
        Location of your information your information{' '}
      </h3>
      <p className='mb-[20px] text-justify text-[16px] font-normal leading-[24px] tablet:mb-[40px] tablet:text-[24px] tablet:leading-[36px]'>
        Your personal data may be processed by us in Ukraine in accordance with
        the requirements of applicable law. BY AGREEING TO THIS PRIVACY POLICY,
        YOU EXPRESSLY AND UNCONDITIONALLY CONSENT TO THE COLLECTION AND
        PROCESSING OF ANY PERSONAL AND NON-PERSONAL INFORMATION THAT WAS
        COLLECTED OR RECEIVED BY MYFIN, AT INTERNATIONAL LEVEL.
      </p>
      <h3 className='mb-[10px] text-[20px] font-bold tracking-[0.01rem] tablet:mb-[15px] tablet:text-[30px]'>
        Storage of your information
      </h3>
      <p className='mb-[20px] text-justify text-[16px] font-normal leading-[24px] tablet:mb-[40px] tablet:text-[24px] tablet:leading-[36px]'>
        Your information will be stored on the servers of MyFin, who maintains
        our data storage and messaging, and will be stored for as long as this
        information is useful, and no longer. Your information will only be
        available to us and to those companies that assist in the operation of
        the site.
      </p>
      <h3 className='mb-[10px] text-[20px] font-bold tracking-[0.01rem] tablet:mb-[15px] tablet:text-[30px]'>
        Email marketing and opting out
      </h3>
      <p className='mb-[20px] text-justify text-[16px] font-normal leading-[24px] tablet:mb-[40px] tablet:text-[24px] tablet:leading-[36px]'>
        To the extent required by the Control of Aggressive Non-Consensual
        Pornography and Advertising Act of 2003 (CAN-SPAM Act), or other similar
        domestic international regulations, all commercial email sent to you by
        us will include unsubscribe link. You can remove yourself from our
        mailing list at any time by clicking on the unsubscribe link found in
        every message we send you.
      </p>
      <h3 className='mb-[10px] text-[20px] font-bold tracking-[0.01rem] tablet:mb-[15px] tablet:text-[30px]'>
        Your privacy rights
      </h3>
      <p className='mb-[20px] text-justify text-[16px] font-normal leading-[24px] tablet:mb-[40px] tablet:text-[24px] tablet:leading-[36px]'>
        You have the right to access, transport, update, correct or erase your
        personal data, as well as the right to challenge or restrict its use, or
        withdraw its use. These rights can be exercised by sending an email to:
        ekaterinazuvak1@gmail.com. You also have the right to file a complaint
        with your local data protection authorities if you believe that your
        data privacy rights in relation to your personal information are not
        properly respected. Furthermore, the California Privacy Act (Civil Code
        § 1798.83) allows California residents to request certain information in
        relation to our disclosure, if any, of your personal identification
        information to third parties during the previous calendar year, for
        their own direct marketing purposes. To submit such a request, please
        send an email to: E-mail ekateribazuvak1@gmail.com with the text
        &ldquo;Request for California Privacy&ldquo; in the subject line. In
        your message to us, you must include sufficient information to enable us
        to locate your personal file, including, at a minimum, your full name,
        email address and mailing address. We will attempt to provide you with
        the requested information within thirty (30) days of receipt. We reserve
        the right not to respond to inquiries sent more than once in a single
        calendar year, or requests for information other than that specified in
        this notice. Please note that the California Personal Information Act
        does not cover all types of communications, and our disclosures may only
        include information required by law.
      </p>
      <h3 className='mb-[10px] text-[20px] font-bold tracking-[0.01rem] tablet:mb-[15px] tablet:text-[30px]'>
        Updates to the Privacy Policy
      </h3>
      <p className='mb-[20px] text-justify text-[16px] font-normal leading-[24px] tablet:mb-[40px] tablet:text-[24px] tablet:leading-[36px]'>
        MyFin reserves the right to update this Privacy Policy at its sole
        discretion. You can find out if this Privacy Policy has been updated
        since your visit by looking at the &ldquo;Effective date of the current
        policy&ldquo; at the bottom of this page. Your use of our website
        constitutes your acceptance of the terms of the Privacy Policy, as
        amended by us, and for this reason, you should review this Privacy
        Policy regularly to ensure that you are aware of the terms of this
        policy. If you have any questions regarding the privacy policy, please
        send an email to Alternative E-mail ekaterinazuvak1@gmail.com.
      </p>
    </section>
  );
};
