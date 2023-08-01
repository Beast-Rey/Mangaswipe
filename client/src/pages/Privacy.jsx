import {Helmet} from 'react-helmet-async'

const Privacy = () => {
  return (
    <>
    <Helmet>
        <title>Manga Swipe - Privacy Policy</title>
        <link rel="canonical" href="/privacy-policy" />
        <meta name="description" content="website for reading latest manga" />
    </Helmet>
    <section className="text-white w-[85%] xl:w-[70%] mx-auto mb-8 space-y-10">
      <div>
      <h1 className="text-3xl my-4">Privacy Policy &rarr;</h1>
      <p>
        The following web pages outline mangaswipe.com’s collection and use of
        personal information from its users. mangaswipe.com values the privacy
        of our members and users. mangaswipe.com will never share any personal
        information of anybody who logs on to mangaswipe.com with anyone. This
        includes your e-mail address, name, and location. Upon logging on to
        mangaswipe.com, your IP address and hostname are logged for statistical
        and security reasons.
      </p>
      </div>
      <div>
      <h2 className="text-3xl my-4">Security &rarr;</h2>
      <p>
        mangaswipe.com will make a reasonable effort to protect all personal
        information such as passwords and use technology such as encryption,
        access control procedures, firewalls, and physical securities. We
        recommend you use a unique password with both letters and numbers to
        protect your account on mangaswipe.com. If others, including family,
        friends, or other household members access and use the comment or
        message board through your login credentials, you are responsible for
        the actions of yourself and your individual account. Only in extreme
        cases will your account be fully terminated.
      </p>
      </div>

     <div>
     <h2 className="text-3xl my-4">Cookies &rarr;</h2>
      <p>
        mangaswipe.com uses cookies (a very small text file placed on your
        system when you log on to mangaswipe.com, and most other websites) to
        serve as an identification card and is uniquely yours. It can only be
        read by the server that gives this cookie to you. Cookies give us
        information that you returned to mangaswipe.com’s specific pages and
        help us track your preferences and your behavior. The basic function of
        cookies is to help our server remember who you are.
      </p>
     </div>

      <div>
      <h2 className="text-3xl my-4">Disclosing Information &rarr;</h2>
      <p>
        When required by applicable law, mangaswipe.com may store and disclose
        personal information for the members of the website. This means that we
        may make a disclosure that is necessary for the legal and regulatory
        requirements to protect the rights, safety, and property of
        mangaswipe.com, users of the mangaswipe.com website, and the public.
      </p>
      </div>

      <div>
      <h2 className="text-3xl my-4">Children’s Privacy &rarr;</h2>
      <p>
        mangaswipe.com makes a reasonable effort to prevent someone who is
        underage to join as a member. mangaswipe.com also will not collect
        information and personal data from children under the age of 13. If
        there is someone under the age of 13 to become a member of
        mangaswipe.com, we will close that child’s account and delete any
        information collected about the child. Notwithstanding the foregoing,
        mangaswipe.com may choose to retain some personal information such as
        the underage’s e-mail address as a means to prevent the child from
        re-registering at our website. Since April 2000, the Children’s Online
        Privacy Protection Act (COPPA) went into effect, and as result websites
        all over the world wide web had to change the standards to not collect
        any information from a child.
      </p>
      </div>
      

     <div>
     <h2 className="text-3xl my-4">Third Parties &rarr;</h2>
      <p>
        Third-party websites may collect information from mangaswipe.com users.
        This information includes your IP Address, hostname, and information
        about your system to help us serve you better. They are functioned for
        statistical reasons, and will not be used for any other reasons. If you
        would like to know more about this practice and to know your options
        about not having this information used by these companies, you can see
        http://www.networkadvertising.org/managing/opt_out.asp.
      </p>
     </div>

      <div>
      <h2 className="text-3xl my-4">Website Policy Changes &rarr;</h2>
      <p>
        mangaswipe.com reserves the right to change this, and any other policy
        located on our website at any time without notifying our users. If you
        have any comments, questions, or concerns regarding this policy, or any
        other policy you may send them to us.
      </p>
      </div>

      <div>
      <h2 className="text-3xl my-4">Common ID Cookie &rarr;</h2>
      <p>
        This site uses cookies and similar tracking technologies such as the
        Common ID cookie to provide its services. Cookies are important devices
        for measuring advertising effectiveness and ensuring a robust online
        advertising industry. The Common ID cookie stores a unique user id in
        the first-party domain and is accessible to our ad partners. This simple
        ID can be utilized to improve user matching, especially for delivering
        ads to iOS and macOS browsers. Users can opt-out of the Common ID
        tracking cookie by clicking here.
      </p>
      </div>

      <div>
        <h2 className="text-3xl my-4">Advertising Privacy Settings &rarr;</h2>
        <p>
          FOR EU USERS ONLY: When you use our site, pre-selected companies may
          access and use certain information on your device and about your
          interests to serve ads or personalized content. You may revisit or
          change consent choices at any time by clicking here.
        </p>
      </div>
    </section>
    </>
  );
};

export default Privacy;
