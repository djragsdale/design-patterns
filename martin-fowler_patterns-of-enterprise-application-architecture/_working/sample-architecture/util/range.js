export default function range(start, end, step) {
  let selfStart = start;
  let selfEnd;
  let selfStep;

  if (step && typeof step !== 'number') {
    selfEnd = undefined;
    selfStep = undefined;
  }

  if (end === undefined) {
    selfEnd = selfStart;
    selfStart = 0;
  } else {
    selfEnd = end;
  }

  if (step === undefined) {
    selfStep = selfStart < selfEnd ? 1 : -1;
  } else {
    selfStep = step;
  }

  let index = -1;
  let length = Math.max(Math.ceil((selfEnd - selfStart) / (selfStep || 1)), 0);
  const result = Array(length);

  while (length) {
    length -= 1;
    index += 1;
    result[index] = selfStart;
    selfStart += selfStep;
  }

  return result;
}
