
import React from 'react';

export default function Navigation() {
    return (
        <div>
            <nav class="navbar">
                <ul class="navbar-nav">
                    <li class="logo">
                        <a href="#" class="nav-link">
                            <span class="link-text logo-text">Ramazzini</span>
                            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x">
                                <g class="fa-group">
                                    <path fill="currentColor"
                                        d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                        class="fa-secondary"></path>
                                    <path fill="currentColor"
                                        d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                        class="fa-primary"></path>
                                </g>
                            </svg>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#AboutMe" class="nav-link">
                            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x">
                                <path fill="currentColor" class="fa-secondary"
                                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                            </svg>
                            <span class="link-text">About Me</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#Portfolio" class="nav-link">
                            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x">
                                <path fill="currentColor" class="fa-secondary"
                                    d="M32 64C32 28.7 60.7 0 96 0H256V128c0 17.7 14.3 32 32 32H416V288H248c-13.3 0-24 10.7-24 24s10.7 24 24 24H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM416 336V288H526.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H416zm0-208H288V0L416 128z" />
                            </svg>
                            <span class="link-text">Portfolio</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#Contact" class="nav-link">
                            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x">
                                <path fill="currentColor" class="fa-secondary"
                                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                            </svg>
                            <span class="link-text">Contact Me</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x">
                                <path fill="currentColor" class="fa-secondary"
                                    d="M32 64C32 28.7 60.7 0 96 0H256V128c0 17.7 14.3 32 32 32H416V288H248c-13.3 0-24 10.7-24 24s10.7 24 24 24H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM416 336V288H526.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H416zm0-208H288V0L416 128z" />
                            </svg>
                            <span class="link-text">Download Resume</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>)
}