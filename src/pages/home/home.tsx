import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNotes } from "../../api/note";

import {
  Container,
  ContainerCreateNote,
  Content,
  ContainerNote,
  ContainerNotes,
} from "./home-styles";

const Home: React.FC = () => {
  const { data } = useQuery(["notes"], getNotes, {
    refetchInterval: 1000,
  });

  const navigate = useNavigate();
  const [path, setPath] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPath(e.target.value);
  };

  const redirect = (value: string) => navigate(`/note?path=${value}`);

  const onRedirect = () => {
    if (path.length > 0) {
      redirect(path);
    }
  };

  const onSelectNote = (value: string) => {
    redirect(value);
  };

  const renderNotes = () => {
    return data?.map((note) => {
      return (
        <ContainerNote key={note.id}>
          <span>{note.text}</span>
          <button onClick={() => onSelectNote(note.path.replace("/", ""))}>
            Acessar nota
          </button>
        </ContainerNote>
      );
    });
  };

  return (
    <Container>
      <Content>
        <ContainerCreateNote>
          <input
            type="text"
            placeholder="Digite o path da nota"
            value={path}
            onChange={onChange}
          />
          <button onClick={() => onRedirect()}>criar</button>
        </ContainerCreateNote>

        <ContainerNotes>{renderNotes()}</ContainerNotes>
      </Content>
    </Container>
  );
};

export default Home;
