export interface ITableProps {
  title: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  timestamp: string | number;
}

const Table: React.FC<ITableProps> = ({ title, status, createdAt, updatedAt, timestamp }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>파일명</th>
            <th>결과생성</th>
            <th>다운로드</th>
            <th>체크박스</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Table;
