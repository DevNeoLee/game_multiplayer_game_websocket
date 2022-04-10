

import { Form, Button } from "react-bootstrap"
import Input from "../../components/Input"
import Radio from "../../components/Radio"
import Select from "../../components/Select"

import { useState } from 'react'
import "../../App.css"
import data from "./DataGeneral"

import { Link } from "react-router-dom"

export default function FormGeneral({step}) {

    const [questions, setQuestions] = useState(
        data
    )
  return (
    <>  
        <div className="container">
            <div className="formGeneral">
                    <div className="upperForm">
                        <a to="/">
                            <div className="logo">
                                <div><svg width="80px" height="80px" viewBox="0 0 105.56 115.36" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-208.2 -435.67)"><path d="m277.71 444.67h-9v-9h-6v27h-12v-9h-6v16.5a16.5 16.5 0 0 0 33 0z" fill="#484848" /><path d="m261.21 495.67a25.54 25.54 0 0 0 25.46-24h-6a19.5 19.5 0 0 1 -38.88 0h-6a25.54 25.54 0 0 0 25.42 24z" fill="#64beff" /><path d="m226.72 542.06c0 5.56-3.5 9-9.25 9s-9.27-3.41-9.27-9v-12.46h3.59v12.46c0 3.59 2.22 5.75 5.71 5.75s5.63-2.13 5.63-5.75v-12.46h3.59z" fill="#484848" /><path d="m226.78 532.66v6.14h9.67v3.2h-9.67v.07h-3.59v-12.63h14.29v3.22z" fill="#484848" /><path d="m240.15 542v-3.28h3.85v3.28z" fill="#64beff" /><path d="m269.65 540.08c0 6.08-4.92 10.79-11.28 10.79s-11.28-4.71-11.28-10.79 4.93-10.73 11.28-10.73 11.28 4.65 11.28 10.73zm-18.91 0a7.63 7.63 0 0 0 7.66 7.57 7.54 7.54 0 1 0 -7.66-7.57z" fill="#484848" /><path d="m280.69 541.33-3.62 4v5.41h-3.59v-21.3h3.59v11l10.15-11h4.23l-8.24 9.09 8.79 12.19h-4.31z" fill="#484848" /><path d="m310.23 550.72-11.34-15.26v15.26h-3.58v-21.28h3.52l11.4 15.29v-15.29h3.53v21.28z" fill="#484848" /><g fill="#64beff"><path d="m307.31 476.13 5.92 1a52.19 52.19 0 0 0 -2.42-24.13l-5.62 2.13a46.16 46.16 0 0 1 2.12 21z" /><path d="m239.06 511.05c-.44-.24-.88-.47-1.31-.72l-.4-.24c-.42-.24-.83-.5-1.24-.76l-.51-.34c-.39-.25-.78-.51-1.16-.78l-.5-.37-1.15-.85c-.29-.22-.57-.46-.86-.69l-.74-.6a46.71 46.71 0 0 1 -7.69-8.35q-1.31-1.8-2.41-3.69l-.14-.25c-.29-.49-.57-1-.83-1.49-.67-1.26-1.28-2.55-1.83-3.86a46.26 46.26 0 0 1 -3.19-23.86l-5.92-1a52.06 52.06 0 0 0 5.58 31.39c.31.59.64 1.17 1 1.75l.45.75c.25.42.51.84.77 1.25l.42.64c.41.62.82 1.24 1.26 1.84.58.81 1.19 1.6 1.81 2.37l.57.67c.46.55.92 1.09 1.4 1.61.21.24.43.47.64.7.5.53 1 1 1.52 1.55l.57.55c.71.67 1.43 1.33 2.17 2 .27.23.54.44.82.66l1 .79a52.55 52.55 0 0 0 7.28 4.7z" /><path d="m312.75 480.05-5.91-1c-.16.87-.36 1.72-.57 2.56l-.21.75c-.16.6-.33 1.19-.52 1.78-.08.26-.17.52-.26.79-.2.59-.41 1.18-.63 1.76-.08.22-.16.44-.25.65-.29.73-.6 1.46-.93 2.17l-.06.15a49.16 49.16 0 0 1 -2.52 4.7l-.12.18c-.43.69-.87 1.37-1.33 2-.05.07-.09.14-.14.2q-.74 1.05-1.53 2.07l-.25.33-.54.64c-.53.64-1.08 1.26-1.65 1.87l-.45.49c-.42.44-.86.87-1.29 1.29s-.89.84-1.34 1.25l-1 .86c-.43.37-.86.71-1.3 1.06l-.6.46c-.46.35-.92.69-1.4 1l-.51.35c-.92.63-1.87 1.23-2.84 1.79-.18.11-.35.22-.54.32-.39.22-.79.43-1.19.64s-.84.44-1.27.65l-1 .46c-.77.36-1.56.71-2.36 1l-.13.05c-.54.22-1.09.41-1.64.61l-.55.19-.69.22-.77.24-.71.21c-.49.14-1 .27-1.48.39l-.67.16h-.22c-.47.1-.94.21-1.42.3l-.49.09c-.62.12-1.25.22-1.89.31h-.23c-.72.1-1.45.18-2.17.24a46.51 46.51 0 0 1 -11.45-.43c-.74-.12-1.47-.26-2.2-.42s-1.37-.3-2.06-.48l-.41-.11c-.43-.11-.86-.24-1.28-.37l-1.2-.37-.42-.15h-.06c-1.5-.51-3-1.1-4.39-1.75l-2.67 5.37a52.6 52.6 0 0 0 7.58 2.83l.85.25.54.14c.77.2 1.55.38 2.34.55s1.6.32 2.41.45 1.58.23 2.36.32l.71.08c.57.06 1.15.11 1.73.15h.7c.78 0 1.55.08 2.32.09h.13 2.19.74c.54 0 1.09-.06 1.63-.11.24 0 .49 0 .73-.06.75-.06 1.49-.14 2.23-.25h.1l1.08-.17c1-.16 2-.35 3-.57l.64-.13 1.08-.28c.45-.11.9-.22 1.34-.35l.63-.19c.61-.18 1.21-.37 1.81-.57a52.73 52.73 0 0 0 5.3-2.12l.69-.33c.72-.35 1.43-.71 2.13-1.09l.59-.32a51.84 51.84 0 0 0 5.23-3.32l.3-.22c.79-.57 1.55-1.17 2.3-1.78l.18-.15a53.2 53.2 0 0 0 7.6-7.7l.14-.18a52.22 52.22 0 0 0 10.38-22.65z" /><path d="m228 487.6a37.84 37.84 0 0 1 -3-7.73 37.18 37.18 0 0 1 3-27.14l-5.2-3a43.51 43.51 0 0 0 0 40.87z" /><path d="m290.8 502c.22-.2.44-.39.65-.6l.74-.74.06-.07c.23-.23.47-.46.69-.71s.38-.41.56-.62.58-.63.86-1l.31-.39c.55-.66 1.07-1.34 1.59-2l.35-.48c.46-.64.9-1.29 1.32-2 .06-.09.12-.18.17-.27q.67-1.09 1.29-2.22c.09-.17.18-.34.26-.51q.53-1 1-2l.16-.36c.36-.79.7-1.59 1-2.4l.12-.34q.39-1 .72-2.1l.18-.57c.23-.77.44-1.53.63-2.31 0-.05 0-.1 0-.16.2-.84.37-1.68.52-2.53l.09-.54c.11-.68.21-1.37.29-2.05 0-.2.05-.41.07-.61.08-.85.15-1.71.19-2.57 0-.83 0-1.67 0-2.51 0-.22 0-.45 0-.68 0-.67-.06-1.35-.11-2 0-.19 0-.39-.05-.58-.07-.84-.17-1.69-.3-2.54 0-.15-.06-.3-.08-.46-.12-.7-.25-1.39-.4-2.09-.05-.24-.1-.48-.16-.72-.16-.71-.34-1.41-.54-2.11 0-.14-.07-.28-.12-.42-.24-.83-.52-1.65-.81-2.46l-.24-.63c-.24-.63-.5-1.26-.77-1.88-.1-.23-.2-.47-.31-.7-.36-.8-.75-1.6-1.17-2.39l-5.2 3a37.18 37.18 0 0 1 3 27.14c-.22.83-.48 1.65-.75 2.45l-.19.54c-.29.8-.6 1.6-.94 2.38-.34.8-.73 1.57-1.13 2.34l-.16.32c-.42.78-.86 1.54-1.33 2.29a37.2 37.2 0 0 1 -4.95 6.24l-.45.45-.27.27c-.5.48-1 .94-1.55 1.4l-.41.34c-.4.34-.81.67-1.23 1l-.52.4c-.42.3-.83.6-1.26.89l-.51.34c-.59.39-1.19.77-1.81 1.12s-1 .59-1.57.86-1.28.63-1.93.92l-1 .43-1 .38-.48.18a37 37 0 0 1 -10.51 2.19h-.14c-.44 0-.88.05-1.33.06h-1.54c-.48 0-.95 0-1.42-.06h-.25c-1.21-.08-2.41-.22-3.62-.42h-.1c-.57-.09-1.13-.2-1.7-.32s-1.21-.28-1.81-.44-1.06-.3-1.59-.47a37.28 37.28 0 0 1 -14.74-8.75l-.07-.07c-.68-.65-1.32-1.34-1.95-2.05l-.08-.09c-.38-.44-.76-.89-1.13-1.35l-.17-.21q-.5-.63-1-1.29l-.23-.3c-.37-.53-.73-1.06-1.07-1.61l-5.19 3c.49.79 1 1.55 1.54 2.29.08.12.17.23.25.34.52.71 1.06 1.42 1.63 2.1l.33.41.84.94v.06c.18.2.35.4.53.59l.74.75c.25.25.49.51.75.76s.42.39.63.58.61.58.93.86l.44.36c.49.41 1 .82 1.5 1.22l.2.15 1.31 1 1.21.82.37.25c1 .66 2.08 1.27 3.16 1.85l.45.24c.54.28 1.07.54 1.61.79l.27.12a43.4 43.4 0 0 0 9.41 3.09l.31.06 1.62.29.8.11 1.26.17c.7.07 1.4.14 2.11.18h.31 1.14 2.1 1.43.34a43.22 43.22 0 0 0 9.63-1.68l.32-.1c.64-.19 1.27-.4 1.89-.62l.61-.22c.54-.2 1.07-.41 1.6-.64l.69-.29c.53-.23 1.05-.47 1.57-.72l.64-.31c.71-.36 1.43-.74 2.13-1.15s1.18-.71 1.76-1.08c.43-.27.85-.56 1.26-.85l.38-.26q.78-.56 1.53-1.14c.51-.4 1-.82 1.51-1.24l.46-.38c.42-.27.72-.56 1.02-.88z" /><path d="m288.46 478.49 5.65 2.06a34.31 34.31 0 0 0 1.31-14.89l-5.92 1a28.21 28.21 0 0 1 -1.04 11.83z" /><path d="m287.44 481.31c-.19.46-.4.91-.62 1.35-.12.25-.25.49-.38.74l-.32.6c-.12.21-.24.43-.37.64l-.36.6c-.09.15-.19.29-.29.44-.15.24-.31.48-.47.71l-.17.25q-.69 1-1.44 1.86l-.6.68-.22.24a28 28 0 0 1 -3.6 3.29l-.1.08c-.61.46-1.23.9-1.88 1.31l-.18.12c-.63.4-1.28.77-1.94 1.12l-.23.11c-.66.35-1.33.66-2 .95l-.23.09c-.69.29-1.4.55-2.12.78h-.16c-.75.24-1.5.45-2.27.62-.84.19-1.68.34-2.53.46l-1.11.12h-.25-.17a29 29 0 0 1 -4.66 0h-.3c-.69-.06-1.38-.16-2.08-.28l-.37-.07c-.69-.13-1.38-.28-2.07-.46l-.31-.09c-.72-.2-1.44-.42-2.16-.68q-.65-.24-1.29-.51c-.42-.17-.83-.36-1.24-.55-.49-.23-1-.48-1.44-.74l-.33-.19c-.39-.22-.77-.44-1.14-.68l-.21-.13-.82-.55c-.35-.25-.69-.49-1-.75l-.25-.2-.85-.68c-.2-.18-.41-.35-.6-.53l-.19-.17c-.45-.41-.88-.84-1.3-1.27a3.07 3.07 0 0 0 -.25-.26 27.8 27.8 0 0 1 -2.3-2.8l-.22-.3a28.19 28.19 0 0 1 -1.88-3.06l-.18-.33a28.87 28.87 0 0 1 -1.44-3.28l-.13-.37c-.2-.57-.39-1.13-.55-1.71-.16-.57-.3-1.15-.42-1.73l-.09-.4c-.11-.59-.22-1.17-.3-1.77-.08-.59-.14-1.17-.18-1.76v-.44c0-.59 0-1.19 0-1.8 0-.6 0-1.19.08-1.79v-.45c.05-.6.12-1.2.21-1.81.09-.6.21-1.2.34-1.79 0-.15.07-.3.1-.45.14-.61.3-1.21.48-1.81l-5.64-2q-.31 1-.57 2c0 .19-.09.39-.13.58q-.18.78-.33 1.56l-.09.51c-.12.68-.21 1.36-.29 2v.22c-.07.61-.11 1.23-.14 1.84v.51 1.75.3c0 .7.06 1.39.12 2.08a1.94 1.94 0 0 1 0 .24c.06.6.14 1.21.23 1.81l.06.4c.11.67.23 1.33.38 2a34.75 34.75 0 0 0 3.99 10.37c.06.1.13.22.2.32.18.3.37.59.56.88s.35.53.54.79l.38.54c.33.46.67.9 1 1.34.1.14.21.27.32.4s.13.15.19.22l.24.28c.24.28.48.56.73.83.42.46.86.9 1.31 1.33l.16.16c.41.39.83.78 1.26 1.15l.17.15c.48.41 1 .8 1.46 1.18a34.65 34.65 0 0 0 3.3 2.23c.54.32 1.08.62 1.64.91l.23.12c.52.26 1 .52 1.58.75l.23.11c.59.26 1.2.51 1.82.74l.26.1c.47.17 1 .33 1.43.48l.85.25.79.22.74.18.69.16.23.05.66.13.29.05.71.13.6.09h.21l.85.11.56.06 1.11.08h.53.21.93 1.67.43.62.62.33l1.35-.16h.11a34.7 34.7 0 0 0 20.78-10.93c.09-.11.19-.21.29-.32l.66-.78.54-.65.42-.55.66-.89.32-.45c.19-.29.39-.58.58-.88l.19-.3c.05-.08.11-.16.16-.25l.45-.76c.16-.26.31-.53.46-.8l.28-.51c.21-.4.41-.8.6-1.21l.08-.15c.23-.5.44-1 .65-1.52l-5.63-2.05z" /></g></g></svg></div>
                                <img src="/logo_4.png" />
                            </div>
                        </a>
                    </div>
                    <Form>
                        <Form.Group>
                            <h2>{data.title}</h2>
                           {data && data.questions.map(question =>(
                            <div key={question.question}>
                                {question.choices.length < 5 
                                ? 
                                <div key={question.id}>
                                    <Form.Label htmlFor={`radio`}>{question.question}</Form.Label>
                                    {question.choices.map((choice, idx) => (
                                        <Radio label={choice} key={choice + idx} name={question.question}/>
                                    ))}
                                </div>
                                : 
                                <Select question={question.question} choices={question.choices}/>
                                } 
                            </div>
                           ))}
                        </Form.Group>
                      <Link to="/formpregame"><Button>Next</Button></Link>
                </Form>
            </div>
        </div>
    </>
  )
}
