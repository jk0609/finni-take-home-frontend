import styled from "@emotion/styled";
import {
  TableContainer,
  Table as _Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

export const Container = styled(TableContainer)`
  padding: 1rem;
  width: auto;
`;

export const Table = styled(_Table)`
  border: 1px solid;
  border-bottom: 0;
`;

export const Row = styled(TableRow)``;

export const Cell = styled(TableCell)`
  padding: 0;
  border: 1px solid;
  text-align: center;
`;

export const Head = styled(TableHead)`
  ${Row} {
    background-color: #3f3f46;
    ${Cell} {
      color: white;
    }
  }
`;

export const Body = styled(TableBody)`
  ${Row} {
    &:nth-of-type(even) {
      background-color: #fff;
      color: #2d2d2d;
    }
    &:nth-of-type(odd) {
      background-color: #f7f8fa;
      color: #2d2d2d;
    }
  }
`;
