// eslint-disable-next-line import/prefer-default-export
export function updateGroup(group) {
  const upperCaseGroup = group.toUpperCase();

  return {
    type: 'SETTINGS_UPDATE_GROUP',
    payload: upperCaseGroup,
  };
}
