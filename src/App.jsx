import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header>
          <section className='nav-container'>
            <div className='logo-container'>
              <svg
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M22.6547 20.1278C22.2021 19.5222 21.5326 19.0566 20.5609 19.2084C18.315 19.5594 19.5081 17.8047 17.8939 18.5066C16.6025 19.0681 15.6713 20.6589 15.3672 21.3842C15.2736 20.9397 14.918 19.9664 14.2443 19.6295C13.402 19.2084 13.1213 19.9103 12.63 19.2084C12.1387 18.5066 12.1387 17.524 11.7176 16.5414C11.2965 15.5588 13.1213 14.0849 14.2443 14.6464C15.3672 15.2079 16.0691 14.857 16.6305 15.6992C17.192 16.5414 17.8939 17.5942 17.8939 14.6464C17.8939 11.6986 19.2976 10.3651 19.9292 10.4353C20.5609 10.5055 22.5261 9.80349 22.1752 9.10179C21.8242 8.40009 19.9292 8.04901 19.9292 7.41735C19.9292 6.78568 20.7715 5.45233 19.9292 4.82067C19.087 4.189 16.9815 2.92567 15.3672 3.06604C13.753 3.20641 13.2556 3.83849 13.2556 4.39997C13.2556 4.96145 15.3672 6.01439 14.2443 6.71587C13.1213 7.41735 9.47167 8.53994 9.47167 7.41735C9.47167 6.29475 9.26112 3.90846 9.96297 3.90846C10.6648 3.90846 10.8754 2.15384 11.2965 2.22402C11.7176 2.29421 13.4722 1.52262 14.2443 1.87332C14.4809 1.98084 15.2586 1.77834 16.1343 1.41344M22.6547 20.1278C24.1286 18.1347 25 15.6691 25 13C25 7.45694 21.2417 2.79168 16.1343 1.41344M22.6547 20.1278C20.4689 23.0835 16.9583 25 13 25C12.2953 25 11.6048 24.9393 10.9334 24.8227M10.9334 24.8227C11.0241 24.3006 11.1428 23.8692 11.2965 23.6301C11.9281 22.6475 14.0337 23.3494 14.2443 22.8581C14.4548 22.3668 13.5424 21.8053 12.63 21.3842C11.7176 20.9631 10.1735 20.542 9.96297 18.5066C9.75241 16.4712 8.76982 16.8221 8.55926 16.5414C8.34871 16.2607 5.89223 15.4886 5.11998 14.0849C4.34773 12.6812 5.1202 10.2949 5.11998 9.66327C5.11983 9.21675 3.18372 8.73743 1.87768 8.48668M10.9334 24.8227C5.29078 23.8433 1 18.9227 1 13C1 11.4036 1.31174 9.87994 1.87768 8.48668M1.87768 8.48668C3.66115 4.09599 7.96902 1 13 1C14.0844 1 15.1351 1.14383 16.1343 1.41344'
                  stroke='#FF70D9'
                  stroke-width='1.5'
                  stroke-linecap='square'
                  stroke-linejoin='round'
                />
              </svg>

              <svg
                width='44'
                height='19'
                viewBox='0 0 44 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M33.0494 0.913788C31.0619 0.913659 29.1195 1.42278 27.467 2.37678C25.8146 3.33078 24.5267 4.6868 23.7661 6.27336C23.0055 7.85989 22.8064 9.6058 23.194 11.2901C23.5816 12.9745 24.5385 14.5217 25.9436 15.736C27.3487 16.9504 29.1391 17.7775 31.0885 18.1125C33.0369 18.4476 35.0574 18.2757 36.8938 17.6186C38.7294 16.9614 40.2986 15.8485 41.4025 14.4206C42.5072 12.9927 43.0963 11.3139 43.0963 9.59659C43.0932 7.29472 42.034 5.08787 40.1506 3.46013C38.2672 1.83239 35.7132 0.916658 33.0494 0.913788ZM33.0494 14.9369C31.8273 14.9371 30.6325 14.6239 29.6159 14.0372C28.5996 13.4505 27.8074 12.6165 27.3395 11.6407C26.8716 10.6649 26.7492 9.59111 26.9875 8.55513C27.2259 7.51922 27.8144 6.5676 28.6786 5.82064C29.5429 5.07371 30.6443 4.56502 31.843 4.35891C33.0416 4.15279 34.2842 4.25851 35.4131 4.66269C36.5428 5.06687 37.508 5.75135 38.1872 6.62961C38.8657 7.50784 39.2284 8.54037 39.2284 9.59659C39.2261 11.0122 38.5743 12.3691 37.4156 13.3702C36.2576 14.3712 34.6876 14.9346 33.0494 14.9369ZM10.0476 0.913788C8.06036 0.913788 6.11774 1.42303 4.46547 2.37711C2.81311 3.33119 1.52529 4.68726 0.764806 6.27384C0.00432062 7.86044 -0.194594 9.6062 0.193052 11.2905C0.580777 12.9748 1.53767 14.5219 2.94285 15.7362C4.34803 16.9506 6.13835 17.7775 8.08739 18.1126C10.0364 18.4476 12.0567 18.2757 13.8927 17.6185C15.7287 16.9613 17.2978 15.8484 18.4019 14.4205C19.506 12.9926 20.0953 11.3139 20.0953 9.59659C20.0921 7.29458 19.0325 5.08765 17.1489 3.4599C15.2653 1.83213 12.7115 0.916476 10.0476 0.913788ZM10.0476 14.9369C8.90883 14.9374 7.79211 14.666 6.82057 14.1526C5.8491 13.6392 5.06057 12.9039 4.54217 12.0277C4.02384 11.1515 3.79563 10.1685 3.8829 9.1874C3.97018 8.20619 4.36942 7.26493 5.03667 6.46746C5.70393 5.67004 6.61319 5.04742 7.66402 4.66835C8.71493 4.28928 9.86659 4.16852 10.9918 4.31937C12.1172 4.47023 13.1723 4.88684 14.0409 5.52324C14.9095 6.15962 15.5577 6.99107 15.914 7.9257H10.0476V11.2675H15.914C15.5059 12.334 14.7197 13.2625 13.6667 13.9211C12.6137 14.5797 11.3475 14.9351 10.0476 14.9369Z'
                  fill='#FF70D9'
                />
              </svg>
            </div>

            <input type='checkbox' id='menu-toggle' className='menu-toggle' />

            <label for='menu-toggle' className='icon'></label>

            <nav>
              <a href='#home' className='home-btn'>
                Home
              </a>
              <a href='#products' className='products-btn'>
                Products
              </a>
              <a href='#backet' className='backet-btn'>
                Backet
              </a>
            </nav>
          </section>
        </header>

        <section className='hero-container'>
          <div className='image-container'>
            <div className='yellow-circle'></div>
            <div className='brown-cirlce'></div>
            <div className='white-cirlce'></div>
            <div className='orbit'></div>
            <div className='earth'></div>
            <div className='rocket'></div>
            <div className='blue-shadow'></div>
          </div>

          <article>
            <h1>
              Discover the vast expanses of <span>space</span>
            </h1>
            <h4>
              Where the possibilities are <span>endless!</span>
            </h4>
            <button type='button'>Learn more</button>
          </article>
        </section>

        <main>
          <section className='posts-containter'>
            <h3>Offers</h3>

            <div className='posts'>
              <article>
                <h2>Move the borders of reality!</h2>
                <h5>Go on a space adventure </h5>
                <button type='button'>Learn more</button>
              </article>

              <article>
                <h2>Space is not just stars and planets</h2>
                <h5>it is a majestic journey to </h5>
                <button type='button'>Learn more</button>
              </article>

              <article>
                <h2>For those who dream of stars </h2>
                <h5>Our offer: make your dream come true</h5>
                <button type='button'>Learn more</button>
              </article>

              <article>
                <h2>Fulfill your fantastic dreams</h2>
                <h5>Space has never been so close</h5>
                <button type='button'>Learn more</button>
              </article>
            </div>
          </section>

          <section className='detailed-description-container'>
            <h3>Embark of an space journey</h3>

            <article>
              Traveling into space is one of the most exciting and unforgettable
              adventures that can change your life forever. And if you have ever
              dreamed of exploring stars, planets and galaxies, then our company
              is ready to help you realize this dream. We offer a unique
              experience that will allow you to go on a space journey and see
              all the secrets of the universe. We guarantee that every moment in
              space will be filled with incredible impressions, excitement and
              new discoveries. Our team of professionals takes care of your
              safety and comfort so that you can fully enjoy your adventure in
              space. We offer various options for space excursions.
            </article>

            <a href='#read-more'>Read more</a>
          </section>
        </main>
        <footer>
          <div className='rocket'></div>
          <h3>Exciting space adventure!</h3>
        </footer>
      </div>
    </div>
  );
}

export default App;
