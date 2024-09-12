import { nanoid } from "nanoid";
import {
  FaCss3,
  FaDatabase,
  FaGit,
  FaHtml5,
  FaJava,
  FaJs,
  FaPython,
  FaReact,
  FaTable,
} from "react-icons/fa";

export const skills = [
  {
    id: nanoid(),
    title: "Python",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width=""
        height=""
        viewBox="0 0 48 48"
      >
        <path
          fill="#0277BD"
          d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
        ></path>
        <path
          fill="#FFC107"
          d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
        ></path>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "Java",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width=""
        height=""
        viewBox="0 0 48 48"
      >
        <path
          fill="#F44336"
          d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
        ></path>
        <path
          fill="#F44336"
          d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
        ></path>
        <g>
          <path
            fill="#1565C0"
            d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
          ></path>
          <path
            fill="#1565C0"
            d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
          ></path>
          <path
            fill="#1565C0"
            d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
          ></path>
          <path
            fill="#1565C0"
            d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
          ></path>
          <path
            fill="#1565C0"
            d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "C++",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width=""
        height=""
        viewBox="0 0 48 48"
      >
        <path
          fill="#00549d"
          fill-rule="evenodd"
          d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#0086d4"
          fill-rule="evenodd"
          d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#0075c0"
          fill-rule="evenodd"
          d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M31 21H33V27H31zM38 21H40V27H38z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M29 23H35V25H29zM36 23H42V25H36z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "HTML",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width=""
        height=""
        viewBox="0 0 48 48"
      >
        <path fill="#E65" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
        <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
        <path
          fill="#FFF"
          d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
        ></path>
        <path
          fill="#EEE"
          d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
        ></path>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "CSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width=""
        height=""
        viewBox="0 0 48 48"
      >
        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
        <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
        <path
          fill="#FFF"
          d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
        ></path>
        <path
          fill="#EEE"
          d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
        ></path>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width=""
        height=""
        viewBox="0 0 48 48"
      >
        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
        <path
          fill="#000001"
          d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
        ></path>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "PHP",
    icon: (
      <svg
        width="px"
        height="px"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="14" fill="#8892BF" />
        <path
          d="M14.4392 10H16.1192L15.6444 12.5242H17.154C17.9819 12.5419 18.5986 12.7269 19.0045 13.0793C19.4184 13.4316 19.5402 14.1014 19.3698 15.0881L18.5541 19.4889H16.8497L17.6288 15.2863C17.7099 14.8457 17.6856 14.533 17.5558 14.348C17.426 14.163 17.146 14.0705 16.7158 14.0705L15.3644 14.0573L14.3661 19.4889H12.6861L14.4392 10Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.74092 12.5243H10.0036C10.9612 12.533 11.6552 12.8327 12.0854 13.4229C12.5156 14.0132 12.6576 14.8193 12.5115 15.8414C12.4548 16.3085 12.3289 16.7665 12.1341 17.2159C11.9474 17.6652 11.6878 18.0704 11.355 18.4317C10.9491 18.8898 10.5149 19.1805 10.0523 19.304C9.58969 19.4274 9.11076 19.489 8.61575 19.489H7.15484L6.69222 22H5L6.74092 12.5243ZM7.43485 17.9956L8.16287 14.0441H8.40879C8.49815 14.0441 8.5914 14.0396 8.6888 14.0309C9.33817 14.0221 9.87774 14.0882 10.308 14.2291C10.7462 14.37 10.8923 14.9031 10.7462 15.8282C10.5678 16.9296 10.2186 17.5727 9.69926 17.7577C9.1799 17.934 8.53053 18.0176 7.75138 18.0088H7.58094C7.53224 18.0088 7.48355 18.0043 7.43485 17.9956Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.4365 12.5243H21.1738L19.4329 22H21.1251L21.5878 19.489H23.0487C23.5437 19.489 24.0226 19.4274 24.4852 19.304C24.9479 19.1805 25.382 18.8898 25.7879 18.4317C26.1207 18.0704 26.3803 17.6652 26.567 17.2159C26.7618 16.7665 26.8877 16.3085 26.9444 15.8414C27.0905 14.8193 26.9486 14.0132 26.5183 13.4229C26.0881 12.8327 25.3942 12.533 24.4365 12.5243ZM22.5958 14.0441L21.8678 17.9956C21.9165 18.0043 21.9652 18.0088 22.0139 18.0088H22.1843C22.9635 18.0176 23.6128 17.934 24.1322 17.7577C24.6515 17.5727 25.0007 16.9296 25.1792 15.8282C25.3253 14.9031 25.1792 14.37 24.7409 14.2291C24.3107 14.0882 23.7711 14.0221 23.1217 14.0309C23.0243 14.0396 22.9311 14.0441 22.8417 14.0441H22.5958Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "MySQL",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width=""
        height=""
        viewBox="0 0 48 48"
      >
        <path
          fill="#00796b"
          d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"
        ></path>
        <path
          fill="#00796b"
          d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"
        ></path>
        <path
          fill="#f57f17"
          d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"
        ></path>
        <path
          fill="#f57f17"
          d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"
        ></path>
        <path
          fill="#f57f17"
          d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"
        ></path>
        <path
          fill="#00796b"
          d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"
        ></path>
        <path
          fill="#00796b"
          d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"
        ></path>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "Tableau",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width=""
        height=""
        viewBox="0 0 48 48"
      >
        <rect width="1.5" height="9" x="22.75" y="1" fill="#78909c"></rect>
        <rect width="9" height="1.5" x="19" y="4.75" fill="#78909c"></rect>
        <rect width="1.5" height="9" x="40.75" y="19" fill="#5c6bc0"></rect>
        <rect width="9" height="1.5" x="37" y="22.75" fill="#5c6bc0"></rect>
        <rect width="1.5" height="9" x="4.75" y="19" fill="#78909c"></rect>
        <rect width="9" height="1.5" x="1" y="22.75" fill="#78909c"></rect>
        <rect width="1.5" height="9" x="22.75" y="37" fill="#5c6bc0"></rect>
        <rect width="9" height="1.5" x="19" y="40.75" fill="#5c6bc0"></rect>
        <rect width="17" height="3" x="15" y="22" fill="#e8762d"></rect>
        <rect width="3" height="17" x="22" y="15" fill="#e8762d"></rect>
        <rect width="2" height="14" x="11" y="6" fill="#ffa000"></rect>
        <rect width="14" height="2" x="5" y="12" fill="#ffa000"></rect>
        <rect width="2" height="14" x="34" y="6" fill="#607d8b"></rect>
        <rect width="14" height="2" x="28" y="12" fill="#607d8b"></rect>
        <rect width="2" height="14" x="11" y="27" fill="#c62828"></rect>
        <rect width="14" height="2" x="5" y="33" fill="#c62828"></rect>
        <rect width="2" height="14" x="34" y="27" fill="#0d47a1"></rect>
        <rect width="14" height="2" x="28" y="33" fill="#0d47a1"></rect>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "Arduino",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width=""
        height=""
        viewBox="0 0 48 48"
      >
        <path
          fill="#009688"
          d="M35.7,34.7c-7.7,0-13.2-8.9-13.4-9.3l-0.6-1l0.6-1C22.5,22.9,28,14,35.7,14C41.4,14,46,18.6,46,24.3 S41.4,34.7,35.7,34.7z M26.4,24.3c1.5,2,5.1,6.3,9.2,6.3c3.5,0,6.3-2.8,6.3-6.3c0-3.5-2.8-6.3-6.3-6.3C31.5,18,27.9,22.3,26.4,24.3 z"
        ></path>
        <path
          fill="#009688"
          d="M12.3,34.7C6.6,34.7,2,30,2,24.3S6.6,14,12.3,14c7.9,0,13.2,8.9,13.4,9.3l0.6,1l-0.6,1 C25.5,25.7,20,34.7,12.3,34.7z M12.3,18C8.8,18,6,20.8,6,24.3c0,3.5,2.8,6.3,6.3,6.3c4.2,0,7.8-4.3,9.3-6.3 C20.2,22.3,16.6,18,12.3,18z"
        ></path>
        <path fill="#009688" d="M10 23h6v2h-6V23zM32 23h6v2h-6V23z"></path>
        <path fill="#009688" d="M34,21h2v6h-2V21z"></path>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "ReactJS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width=""
        height=""
        viewBox="0 0 48 48"
      >
        <path
          fill="#80deea"
          d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
        ></path>
        <path
          fill="#80deea"
          d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
        ></path>
        <path
          fill="#80deea"
          d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
        ></path>
        <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width=""
        height=""
        viewBox="0 0 48 48"
      >
        <path
          fill="#00acc1"
          d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
        ></path>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "Flutter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width=""
        height=""
        viewBox="0 0 48 48"
      >
        <polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4"></polygon>
        <polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22"></polygon>
        <rect
          width="8.485"
          height="8.485"
          x="16.757"
          y="28.757"
          fill="#03a9f4"
          transform="rotate(-45.001 21 33)"
        ></rect>
        <polygon fill="#01579b" points="38,44 26,44 21,39 27,33"></polygon>
        <polygon fill="#084994" points="21,39 30,36 27,33"></polygon>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "NumPy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width=""
        height=""
        viewBox="0 0 48 48"
      >
        <polygon
          fill="#00acc1"
          points="21.196,12.276 14.392,8.842 6.922,12.569 13.912,16.078"
        ></polygon>
        <polygon
          fill="#00acc1"
          points="24.317,13.85 31.451,17.453 24.049,21.169 17.049,17.654"
        ></polygon>
        <polygon
          fill="#00acc1"
          points="33.846,8.893 41.176,12.569 34.619,15.86 27.47,12.254"
        ></polygon>
        <polygon
          fill="#00acc1"
          points="30.69,7.31 24.091,4 17.564,7.258 24.364,10.687"
        ></polygon>
        <polygon
          fill="#00acc1"
          points="25.532,35.725 25.532,44.73 33.525,40.74 33.518,31.732"
        ></polygon>
        <polygon
          fill="#00acc1"
          points="33.514,28.587 33.505,19.674 25.532,23.637 25.532,32.554"
        ></polygon>
        <polygon
          fill="#00acc1"
          points="43.111,26.918 43.111,35.957 36.292,39.359 36.287,30.361"
        ></polygon>
        <polygon
          fill="#00acc1"
          points="43.111,23.756 43.111,14.898 36.279,18.294 36.285,27.225"
        ></polygon>
        <path
          fill="#448aff"
          d="M22.71,23.637l-5.384-2.708v11.699c0,0-6.586-14.012-7.195-15.27 c-0.079-0.163-0.401-0.341-0.484-0.385C8.46,16.353,5,14.601,5,14.601v20.676l4.787,2.566V27.031c0,0,6.515,12.52,6.582,12.657 s0.718,1.455,1.418,1.919c0.929,0.618,4.919,3.016,4.919,3.016L22.71,23.637z"
        ></path>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "Pandas",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width=""
        height=""
        viewBox="0 0 48 48"
      >
        <rect width="5" height="10" x="18" y="4" fill="#1a237e"></rect>
        <rect width="5" height="10" x="18" y="25" fill="#1a237e"></rect>
        <rect width="5" height="5" x="18" y="17" fill="#fbc02d"></rect>
        <rect width="5" height="33" x="10" y="13" fill="#1a237e"></rect>
        <rect width="5" height="10" x="26" y="33" fill="#1a237e"></rect>
        <rect width="5" height="10" x="26" y="12" fill="#1a237e"></rect>
        <rect width="5" height="5" x="26" y="25" fill="#ff4081"></rect>
        <rect width="5" height="33" x="34" y="2" fill="#1a237e"></rect>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "PyTorch",
    icon: (
      <svg
        width="px"
        height="px"
        viewBox="-27 0 310 310"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M218.281037,90.106412 C268.572988,140.398363 268.572988,221.075034 218.281037,271.716235 C169.036835,322.008186 88.0109141,322.008186 37.7189632,271.716235 C-12.5729877,221.424284 -12.5729877,140.398363 37.7189632,90.106412 L127.825375,0 L127.825375,45.053206 L119.443383,53.4351978 L59.7216917,113.156889 C22.0027285,150.177353 22.0027285,210.946794 59.7216917,248.665757 C96.7421555,286.38472 157.511596,286.38472 195.230559,248.665757 C232.949523,211.645293 232.949523,150.875853 195.230559,113.156889 L218.281037,90.106412 Z M173.227831,84.5184175 C163.969338,84.5184175 156.463847,77.0129263 156.463847,67.7544338 C156.463847,58.4959413 163.969338,50.9904502 173.227831,50.9904502 C182.486323,50.9904502 189.991814,58.4959413 189.991814,67.7544338 C189.991814,77.0129263 182.486323,84.5184175 173.227831,84.5184175 Z"
            fill="#EE4C2C"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "TensorFlow",
    icon: (
      <svg
        width="px"
        height="px"
        viewBox="-9 0 274 274"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M145.726081,42.0651946 L145.726081,84.1347419 L218.586952,126.204312 L218.586952,84.1347419 L145.726081,42.0651946 Z M-1.98726454e-07,84.1347419 L-1.98726454e-07,126.204312 L36.4304238,147.234755 L36.4304238,105.169527 L-1.98726454e-07,84.1347419 Z M109.291294,105.169527 L72.8608701,126.204312 L72.8608701,252.404316 L109.291294,273.439101 L109.291294,189.304303 L145.726081,210.339088 L145.726081,168.26954 L109.291294,147.234755 L109.291294,105.169527 Z"
            fill="#E55B2D"
          ></path>
          <path
            d="M145.726081,42.0651946 L36.4304238,105.169527 L36.4304238,147.234755 L109.291294,105.169527 L109.291294,147.234755 L145.726081,126.204312 L145.726081,42.0651946 Z M255.021717,63.0999794 L218.586952,84.1347419 L218.586952,126.204312 L255.021717,105.169527 L255.021717,63.0999794 Z M182.156505,147.234755 L145.726081,168.26954 L145.726081,210.339088 L182.156505,189.304303 L182.156505,147.234755 Z M145.726081,210.339088 L109.291294,189.304303 L109.291294,273.439101 L145.726081,252.404316 L145.726081,210.339088 Z"
            fill="#ED8E24"
          ></path>
          <path
            d="M145.726081,-3.41864288e-05 L-1.98726454e-07,84.1347419 L36.4304238,105.169527 L145.726081,42.0651946 L218.586952,84.1347419 L255.021717,63.0999794 L145.726081,-3.41864288e-05 Z M145.726081,126.204312 L109.291294,147.234755 L145.726081,168.26954 L182.156505,147.234755 L145.726081,126.204312 Z"
            fill="#F8BF3C"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    id: nanoid(),
    title: "Figma",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width=""
        height=""
        viewBox="0 0 48 48"
      >
        <path
          fill="#e64a19"
          d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
        ></path>
        <path
          fill="#7c4dff"
          d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
        ></path>
        <path
          fill="#66bb6a"
          d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
        ></path>
        <path
          fill="#ff7043"
          d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
        ></path>
        <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
      </svg>
    ),
  },
];
