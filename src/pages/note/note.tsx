import { useDebounce } from "usehooks-ts";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { getNote, putNote } from "../../api/note";

import { Container, Content, LogContainer, LogContent } from "./note-styles";

const Note: React.FC = () => {
  const path = new URLSearchParams(window.location.search).get("path");
  const [actualValue, setActualValue] = useState<string>("");
  const debouncedValue = useDebounce(actualValue, 1000);
  const { data } = useQuery(["note"], async () => await getNote(path || ""), {
    refetchInterval: 1200,
  });

  const renderLogs = () => {
    return data?.logs.map((log) => (
      <LogContent key={log.id}>
        <span>{log.text}</span>
        <div>
          <span>
            Editado em: {moment(log.updatedAt).format("DD/MM/YYYY")} -
            {moment(log.updatedAt).format("HH:mm")}
          </span>
        </div>
      </LogContent>
    ));
  };

  const updateNote = async () => {
    if (debouncedValue) {
      if (debouncedValue === data?.note?.text) return;
      await putNote(debouncedValue, path || "");
    }
  };

  const onChangeNote = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setActualValue(event.target.value);
  };

  const setNewValue = () => {
    if (data?.note?.text && data?.note?.text !== actualValue) {
      setActualValue(data?.note?.text);
    }
  };

  useEffect(() => {
    setNewValue();
  }, [data]);

  useEffect(() => {
    updateNote();
  }, [debouncedValue]);

  return (
    <Container>
      <Content value={actualValue} onChange={(event) => onChangeNote(event)} />
      <LogContainer>{renderLogs()}</LogContainer>
    </Container>
  );
};

export default Note;
