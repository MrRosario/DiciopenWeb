import Link from "next/link";

type props = {
  path: string;
};

const LogoSmall = ({ path }: props) => {
  return (
    <Link href={path}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="74"
        height="14"
        viewBox="0 0 74 14"
        fill="none"
      >
        <path
          d="M10.1055 6.02148C10.1055 6.8418 10 7.58301 9.78906 8.24512C9.57812 8.90137 9.28223 9.4873 8.90137 10.0029C8.52637 10.5127 8.07812 10.9521 7.55664 11.3213C7.03516 11.6904 6.46387 11.9951 5.84277 12.2354C5.22168 12.4697 4.55957 12.6455 3.85645 12.7627C3.15918 12.874 2.44141 12.9297 1.70312 12.9297C1.42773 12.9297 1.1582 12.9238 0.894531 12.9121C0.630859 12.8945 0.361328 12.8711 0.0859375 12.8418L0.332031 1.04688C0.976562 0.841797 1.63867 0.698242 2.31836 0.616211C3.00391 0.52832 3.68359 0.484375 4.35742 0.484375C5.19531 0.484375 5.96582 0.610352 6.66895 0.862305C7.37207 1.11426 7.97852 1.47754 8.48828 1.95215C8.99805 2.42676 9.39355 3.00684 9.6748 3.69238C9.96191 4.37793 10.1055 5.1543 10.1055 6.02148ZM6.50195 6.58398C6.50781 6.26758 6.47266 5.96289 6.39648 5.66992C6.32617 5.37695 6.20605 5.11914 6.03613 4.89648C5.87207 4.66797 5.66113 4.48633 5.40332 4.35156C5.14551 4.21094 4.83789 4.13477 4.48047 4.12305L4.12891 9.57227C4.48047 9.51953 4.7998 9.40527 5.08691 9.22949C5.37402 9.04785 5.62012 8.82812 5.8252 8.57031C6.03613 8.30664 6.19727 8.0166 6.30859 7.7002C6.42578 7.37793 6.49023 7.04688 6.50195 6.70703V6.58398ZM15.2295 0.625L14.6143 12.5957L10.9053 12.7891L10.5537 0.871094L15.2295 0.625ZM24.335 0.994141L24.0186 4.70312C23.8486 4.65625 23.6816 4.62402 23.5176 4.60645C23.3535 4.58887 23.1865 4.58008 23.0166 4.58008C22.6006 4.58008 22.2021 4.63281 21.8213 4.73828C21.4463 4.84375 21.1123 5.00488 20.8193 5.22168C20.5322 5.43848 20.3008 5.71387 20.125 6.04785C19.9551 6.37598 19.8701 6.76562 19.8701 7.2168C19.8701 7.54492 19.917 7.83203 20.0107 8.07812C20.1104 8.31836 20.248 8.52051 20.4238 8.68457C20.6055 8.84277 20.8223 8.96289 21.0742 9.04492C21.332 9.12695 21.6162 9.16797 21.9268 9.16797C22.1436 9.16797 22.3662 9.14746 22.5947 9.10645C22.8232 9.05957 23.0518 8.99805 23.2803 8.92188C23.5088 8.8457 23.7285 8.75781 23.9395 8.6582C24.1504 8.55859 24.3467 8.45312 24.5283 8.3418L24.3877 12.4727C24.1592 12.5898 23.9131 12.6953 23.6494 12.7891C23.3857 12.877 23.1133 12.9531 22.832 13.0176C22.5566 13.0879 22.2783 13.1406 21.9971 13.1758C21.7217 13.2109 21.458 13.2285 21.2061 13.2285C20.374 13.2285 19.6152 13.0732 18.9297 12.7627C18.25 12.4521 17.6641 12.0303 17.1719 11.4971C16.6855 10.958 16.3076 10.334 16.0381 9.625C15.7686 8.91602 15.6338 8.16016 15.6338 7.35742C15.6338 6.39648 15.7686 5.5 16.0381 4.66797C16.3135 3.83594 16.7148 3.11523 17.2422 2.50586C17.7754 1.89062 18.4316 1.41016 19.2109 1.06445C19.9961 0.712891 20.8955 0.537109 21.9092 0.537109C22.3135 0.537109 22.7236 0.569336 23.1396 0.633789C23.5557 0.698242 23.9541 0.818359 24.335 0.994141ZM29.7666 0.625L29.1514 12.5957L25.4424 12.7891L25.0908 0.871094L29.7666 0.625ZM41.2627 6.26758C41.2627 6.80078 41.2012 7.31641 41.0781 7.81445C40.9551 8.30664 40.7764 8.76953 40.542 9.20312C40.3135 9.63672 40.0322 10.0352 39.6982 10.3984C39.3701 10.7559 38.998 11.0635 38.582 11.3213C38.1719 11.5791 37.7236 11.7812 37.2373 11.9277C36.751 12.0684 36.2354 12.1387 35.6904 12.1387C35.1631 12.1387 34.6592 12.0713 34.1787 11.9365C33.7041 11.8018 33.2588 11.6143 32.8428 11.374C32.4268 11.1279 32.0488 10.835 31.709 10.4951C31.375 10.1494 31.0879 9.76855 30.8477 9.35254C30.6133 8.93066 30.4287 8.47949 30.2939 7.99902C30.165 7.51855 30.1006 7.01758 30.1006 6.49609C30.1006 5.98633 30.1621 5.48828 30.2852 5.00195C30.4082 4.50977 30.584 4.04688 30.8125 3.61328C31.0469 3.17969 31.3281 2.78125 31.6562 2.41797C31.9844 2.05469 32.3506 1.74121 32.7549 1.47754C33.165 1.21387 33.6074 1.00879 34.082 0.862305C34.5566 0.71582 35.0576 0.642578 35.585 0.642578C36.4346 0.642578 37.208 0.774414 37.9053 1.03809C38.6084 1.30176 39.2061 1.67969 39.6982 2.17188C40.1963 2.6582 40.5801 3.25 40.8496 3.94727C41.125 4.63867 41.2627 5.41211 41.2627 6.26758ZM37.3604 6.49609C37.3604 6.24414 37.3223 6.00098 37.2461 5.7666C37.1758 5.52637 37.0703 5.31543 36.9297 5.13379C36.7891 4.94629 36.6133 4.79688 36.4023 4.68555C36.1973 4.56836 35.96 4.50977 35.6904 4.50977C35.415 4.50977 35.1689 4.55957 34.9521 4.65918C34.7354 4.75879 34.5479 4.89648 34.3896 5.07227C34.2373 5.24219 34.1201 5.44434 34.0381 5.67871C33.9561 5.90723 33.915 6.15039 33.915 6.4082C33.915 6.6543 33.9502 6.90039 34.0205 7.14648C34.0908 7.39258 34.1963 7.61523 34.3369 7.81445C34.4775 8.01367 34.6504 8.1748 34.8555 8.29785C35.0664 8.4209 35.3096 8.48242 35.585 8.48242C35.8604 8.48242 36.1064 8.42969 36.3232 8.32422C36.5459 8.21289 36.7334 8.06641 36.8857 7.88477C37.0381 7.69727 37.1553 7.4834 37.2373 7.24316C37.3193 7.00293 37.3604 6.75391 37.3604 6.49609ZM52.1172 4.89648C52.1172 5.46484 52.0322 5.96875 51.8623 6.4082C51.6924 6.84766 51.458 7.23438 51.1592 7.56836C50.8662 7.89648 50.5205 8.1748 50.1221 8.40332C49.7236 8.62598 49.2959 8.81055 48.8389 8.95703C48.3877 9.09766 47.9189 9.20312 47.4326 9.27344C46.9463 9.33789 46.4688 9.37305 46 9.37891V13.123H41.9043C41.9043 12.4551 41.9043 11.8047 41.9043 11.1719C41.9102 10.5391 41.9131 9.91211 41.9131 9.29102C41.9189 8.66406 41.9219 8.03418 41.9219 7.40137C41.9277 6.76855 41.9336 6.11523 41.9395 5.44141C41.9512 4.72656 41.9541 4.01172 41.9482 3.29688C41.9424 2.58203 41.957 1.86133 41.9922 1.13477C42.7422 0.912109 43.4922 0.745117 44.2422 0.633789C44.9922 0.522461 45.7656 0.466797 46.5625 0.466797C47.0137 0.466797 47.4648 0.504883 47.916 0.581055C48.3672 0.651367 48.7979 0.765625 49.208 0.923828C49.624 1.08203 50.0078 1.28125 50.3594 1.52148C50.7168 1.75586 51.0244 2.03711 51.2822 2.36523C51.54 2.69336 51.7422 3.06836 51.8887 3.49023C52.041 3.91211 52.1172 4.38086 52.1172 4.89648ZM48.2148 5.19531C48.2148 4.81445 48.0977 4.51855 47.8633 4.30762C47.6348 4.09082 47.3359 3.98242 46.9668 3.98242C46.8438 3.98242 46.7148 3.99414 46.5801 4.01758C46.4512 4.03516 46.3281 4.05859 46.2109 4.08789L46.1055 6.6543C46.1875 6.66602 46.2666 6.67188 46.3428 6.67188C46.4189 6.67188 46.498 6.67188 46.5801 6.67188C46.791 6.67188 46.9932 6.63672 47.1865 6.56641C47.3857 6.49609 47.5615 6.39648 47.7139 6.26758C47.8662 6.13281 47.9863 5.97754 48.0742 5.80176C48.168 5.62012 48.2148 5.41797 48.2148 5.19531ZM62.4268 5.89844C62.4268 6.4082 62.3916 6.91797 62.3213 7.42773C61.3193 7.49219 60.3232 7.59766 59.333 7.74414C58.3428 7.88477 57.3525 8.02539 56.3623 8.16602C56.5146 8.58789 56.752 8.9248 57.0742 9.17676C57.4023 9.42871 57.792 9.55469 58.2432 9.55469C58.4775 9.55469 58.7324 9.51074 59.0078 9.42285C59.2891 9.33496 59.5674 9.22656 59.8428 9.09766C60.1182 8.96289 60.3818 8.81934 60.6338 8.66699C60.8857 8.51465 61.1025 8.37695 61.2842 8.25391L60.8623 12.2441C60.6338 12.4199 60.3848 12.5693 60.1152 12.6924C59.8516 12.8154 59.5762 12.915 59.2891 12.9912C59.002 13.0674 58.7119 13.123 58.4189 13.1582C58.126 13.1934 57.8389 13.2109 57.5576 13.2109C56.9775 13.2109 56.4473 13.1318 55.9668 12.9736C55.4863 12.8154 55.0498 12.5957 54.6572 12.3145C54.2705 12.0273 53.9307 11.6904 53.6377 11.3037C53.3447 10.917 53.1016 10.4951 52.9082 10.0381C52.7148 9.58105 52.5684 9.09766 52.4688 8.58789C52.3691 8.07812 52.3193 7.5625 52.3193 7.04102C52.3193 6.49609 52.3691 5.95117 52.4688 5.40625C52.5684 4.86133 52.7178 4.33691 52.917 3.83301C53.1221 3.3291 53.377 2.86328 53.6816 2.43555C53.9922 2.00195 54.3525 1.62402 54.7627 1.30176C55.1729 0.979492 55.6357 0.727539 56.1514 0.545898C56.6729 0.364258 57.2471 0.273438 57.874 0.273438C58.3955 0.273438 58.8701 0.34668 59.2979 0.493164C59.7314 0.633789 60.1152 0.833008 60.4492 1.09082C60.7891 1.34277 61.082 1.64453 61.3281 1.99609C61.5801 2.34766 61.7852 2.73438 61.9434 3.15625C62.1074 3.57227 62.2275 4.01465 62.3037 4.4834C62.3857 4.94629 62.4268 5.41797 62.4268 5.89844ZM58.9111 5.44141C58.9111 5.27734 58.8936 5.11035 58.8584 4.94043C58.8232 4.76465 58.7646 4.60645 58.6826 4.46582C58.6064 4.3252 58.5039 4.21094 58.375 4.12305C58.2461 4.0293 58.085 3.98242 57.8916 3.98242C57.6572 3.98242 57.4492 4.04688 57.2676 4.17578C57.0918 4.29883 56.9395 4.45703 56.8105 4.65039C56.6816 4.83789 56.5762 5.04297 56.4941 5.26562C56.4121 5.48828 56.3506 5.69336 56.3096 5.88086L58.9111 5.63477V5.44141ZM73.9141 8.55273C73.9141 9.21484 73.9053 9.87109 73.8877 10.5215C73.876 11.166 73.8555 11.8164 73.8262 12.4727L68.7637 12.3848C68.9395 11.3477 69.0918 10.3135 69.2207 9.28223C69.3496 8.24512 69.4141 7.19922 69.4141 6.14453C69.4141 6.06836 69.4111 5.94531 69.4053 5.77539C69.3994 5.60547 69.3877 5.41504 69.3701 5.2041C69.3525 4.9873 69.3262 4.76758 69.291 4.54492C69.2617 4.31641 69.2178 4.1084 69.1592 3.9209C69.1064 3.7334 69.0391 3.58105 68.957 3.46387C68.8809 3.34082 68.7871 3.2793 68.6758 3.2793C68.4766 3.2793 68.3066 3.33789 68.166 3.45508C68.0312 3.57227 67.917 3.72461 67.8232 3.91211C67.7354 4.09375 67.665 4.29883 67.6123 4.52734C67.5596 4.75586 67.5186 4.98438 67.4893 5.21289C67.4658 5.44141 67.4482 5.6582 67.4365 5.86328C67.4307 6.0625 67.4277 6.22656 67.4277 6.35547C67.3984 7.39258 67.375 8.42383 67.3574 9.44922C67.3398 10.4688 67.3164 11.5 67.2871 12.543L62.8047 12.7363C62.9219 10.668 63.0332 8.61133 63.1387 6.56641C63.25 4.52148 63.3379 2.46484 63.4023 0.396484L67.5508 0.185547L67.5156 1.5918C67.6797 1.39258 67.8555 1.20508 68.043 1.0293C68.2363 0.853516 68.4414 0.704102 68.6582 0.581055C68.875 0.452148 69.1035 0.352539 69.3438 0.282227C69.5898 0.206055 69.8477 0.167969 70.1172 0.167969C70.6152 0.167969 71.0518 0.25 71.4268 0.414062C71.8018 0.578125 72.124 0.800781 72.3936 1.08203C72.6631 1.36328 72.8887 1.69727 73.0703 2.08398C73.252 2.46484 73.3984 2.87207 73.5098 3.30566C73.6211 3.73926 73.7061 4.19336 73.7646 4.66797C73.8232 5.13672 73.8613 5.59961 73.8789 6.05664C73.9023 6.51367 73.9141 6.95605 73.9141 7.38379C73.9141 7.81152 73.9141 8.20117 73.9141 8.55273Z"
          fill="#008000"
        />
      </svg>
    </Link>
  );
};

export default LogoSmall;
