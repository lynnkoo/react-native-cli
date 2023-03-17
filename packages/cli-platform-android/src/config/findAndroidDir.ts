/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import fs from 'fs';
import path from 'path';

export default function findAndroidDir(root: string) {
  if (fs.existsSync(path.join(root, 'android'))) {
    return 'android';
  }

  if (
    fs.existsSync(path.join(root, 'build.gradle'))
    || fs.existsSync(path.join(root, 'build.gradle.kts'))
  ) {
    return '.';
  }

  return null;
}
