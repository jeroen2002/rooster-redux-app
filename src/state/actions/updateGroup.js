function updateGroup(group) {
  return {
    type: 'SETTINGS_UPDATE_GROUP',
    payload: group,
  };
}

export default updateGroup;
