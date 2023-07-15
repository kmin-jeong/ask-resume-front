import React, { useState } from 'react';
import { ColorMap } from '../../config/colorMap';
import './index.scss';
import Button from '../Button';

interface IPaginationProps {
  onClickPage: (event: any) => void;
  onClickPrevPage: (event: any) => void;
  onClickNextPage: (event: any) => void;
  startpage: number;
  lastPage: number;
  refetch: any;
  setCurrent: any;
  data: string;
  timestamp: string;
}

export const Pagination = (props: IPaginationProps) => {
  const [startPage, setStartPage] = useState(1);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true);
  const onClickPage = (e: any) => {
    props.refetch({ page: Number(e.target.id) });
    props.setCurrent(Number(e.target.id));
  };
  const onClickPrevPage = () => {
    if (startPage === 1) {
      setIsPrevActive(false);
      return;
    }
    if (startPage === 11) {
      setIsPrevActive(false);
    }
    setIsNextActive(true);
    setStartPage(prev => prev - 10);
    props.refetch({ page: startPage - 1 });
    props.setCurrent(startPage - 1);
  };
  const onClickNextPage = () => {
    if (props.lastPage < startPage + 10) {
      setIsNextActive(false);
      return;
    }
    if (props.lastPage < startPage + 20) {
      setIsNextActive(false);
    }
    setIsPrevActive(true);
    setStartPage(prev => prev + 10);
    props.refetch({ page: startPage + 10 });
    props.setCurrent(startPage + 10);
  };
  return <Button onClick={onClickPage} />;
  // 속성을 추가하려면 pagination 전용으로 버튼을 하나 더 만들어야 함;
};
