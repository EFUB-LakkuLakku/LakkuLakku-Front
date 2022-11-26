import React, {
  createRef,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import "./canvas.css";
import { Image as KonvaImage, Layer, Stage } from "react-konva";
import useImage from "use-image";
import { IndividualSticker } from "./individualSticker";
import { ReactReduxContext, Provider, useSelector, useDispatch } from "react-redux";
import { deleteStickerOnPanel, changeSticker } from "../../../modules/sticker";
import { deleteImageOnPanel, changeImage } from "../../../modules/image";

import { Note } from "./text/Note";
import { changeNote, deleteNoteOnPanel } from "../../../modules/note";
import { changeSelectedId } from "../../../modules/selectedId"; //*

import { legacy_createStore as createStore } from "redux";
import rootReducer from "../../../modules/index"

const store = createStore(rootReducer);


export default function Canvas({ type, paper, setPaper, setShowTextMenu }) {
  // 다이어리 요소들 조회하는 api 요청을 Canvas 내부에서 보내기.

  const dispatch = useDispatch();

  const stickers = useSelector((state) => state.sticker);
  const images = useSelector((state) => state.image);
  const notes = useSelector((state) => state.note); //캔버스에 존재하는 노트들
  const selectedId = useSelector((state) => state.selectedId.selectedId); //*

  const [background] = useImage(paper.src); // 속지


  // 빈 땅 클릭했을때 포커스 해제
  const checkDeselect = (e) => {
    //console.log(e.target);

    const clickedOnEmpty = e.target.attrs.id == "backgroundImage"; // 배경을 클릭했다면

    if (clickedOnEmpty) dispatch(changeSelectedId(null)); setShowTextMenu(false); //*;
  };

  return (    
    <ReactReduxContext.Consumer>
      {({ store }) => (

        <div style={{ width: "100%", height: "674rem" }}>
          <Stage
            width={945}
            height={674 * 0.9}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
          >
            <Provider store={store}>
              <Layer>

                <KonvaImage
                  image={background}
                  id="backgroundImage"
                  width={1380* 0.685}
                  height={674 * 0.9}
                />
                
                {stickers &&
                  stickers.map((sticker, i) => {
                    return (
                      <IndividualSticker
                        key={i}
                        onDelete={() => dispatch(deleteStickerOnPanel(i))}
                        onDragEnd={(event) => {
                          sticker.x = event.target.x();
                          sticker.y = event.target.y();
                        }}
                        isSelected={sticker.id === selectedId}
                        image={sticker}
                        onSelect={() => {
                          dispatch(changeSelectedId(sticker.id)); //*
                          setShowTextMenu(false);
                          //console.log(sticker.id);
                          //console.log(selectedId);
                        }}
                        onChange={(newAttrs) => {
                          // 변경된 크기값으로 적용
                          dispatch(changeSticker(i, newAttrs));
                        }}
                      />
                    );
                  })}

                {images &&
                  images.map((image, i) => {
                    return (
                      <IndividualSticker
                        onDelete={() => dispatch(deleteImageOnPanel(i))}
                        onDragEnd={(event) => {
                          image.x = event.target.x();
                          image.y = event.target.y();
                        }}
                        key={i}
                        image={image}
                        isSelected={image.id === selectedId}
                        onSelect={() => {
                          dispatch(changeSelectedId(image.id)); //*
                          setShowTextMenu(false);
                        }}
                        onChange={(newAttrs) => {
                          // 변경된 크기값으로 적용
                          dispatch(changeImage(i, newAttrs));
                        }}
                      />
                    );
                  })}

                {notes && 
                  notes.map((note, i) => {
                  //캔버스에 존재하는 노트들 하나하나!!
                    return (
                      <Note
                        key={i}
                        note={note}
                        onDelete={() => dispatch(deleteNoteOnPanel(i))}
                        isSelected={note.id === selectedId}
                        onChange={(newAttrs) => {
                          dispatch(changeNote(i, newAttrs));
                        }}
                        setShowTextMenu={setShowTextMenu}
                      />
                    );
                })}

              </Layer>
            </Provider>
          </Stage>      
        </div>

      )}
      </ReactReduxContext.Consumer>
      
  );
}
