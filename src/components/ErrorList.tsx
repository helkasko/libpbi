import * as React from 'react';

type ErrorListProps = {
  errors: string[]
};

const ErrorList: React.FunctionComponent<ErrorListProps> = ({ errors }) => (
  <>
    <h3>The following errors were encountered:</h3>
    {errors.map((err: string, i: number) => <p key={`error-${i}`}>{err}</p>)}
  </>
);

export default ErrorList;
