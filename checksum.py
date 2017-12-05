#!/usr/bin/env python

     2 # coding: utf-8

     3 

     4 # This file is part of Adblock Plus <https://adblockplus.org/>,

     5 # Copyright (C) 2006-2015 Eyeo GmbH

     6 #

     7 # Adblock Plus is free software: you can redistribute it and/or modify

     8 # it under the terms of the GNU General Public License version 3 as

     9 # published by the Free Software Foundation.

    10 #

    11 # Adblock Plus is distributed in the hope that it will be useful,

    12 # but WITHOUT ANY WARRANTY; without even the implied warranty of

    13 # MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the

    14 # GNU General Public License for more details.

    15 #

    16 # You should have received a copy of the GNU General Public License

    17 # along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.

    18 

    19 #############################################################################

    20 # This is a reference script to validate the checksum in downloadable       #

    21 # subscription. This performs the same validation as Adblock Plus when it   #

    22 # downloads the subscription.                                               #

    23 #                                                                           #

    24 # To validate a subscription file, run the script like this:                #

    25 #                                                                           #

    26 #   python validateChecksum.py < subscription.txt                           #

    27 #                                                                           #

    28 # Note: your subscription file should be saved in UTF-8 encoding, otherwise #

    29 # the validation will fail.                                                 #

    30 #                                                                           #

    31 #############################################################################

    32 

    33 import sys, re, codecs, hashlib, base64

    34 

    35 checksumRegexp = re.compile(r'^\s*!\s*checksum[\s\-:]+([\w\+\/=]+).*\n', re.I | re.M)

    36 

    37 def validate(data):

    38   checksum = extractChecksum(data)

    39   if not checksum:

    40     raise Exception('Data doesn\'t contain a checksum, nothing to validate')

    41 

    42   expectedChecksum = calculateChecksum(data)

    43   if checksum == expectedChecksum:

    44     print 'Checksum is valid'

    45   else:

    46     print 'Wrong checksum: found %s, expected %s' % (checksum, expectedChecksum)

    47 

    48 def extractChecksum(data):

    49   match = re.search(checksumRegexp, data)

    50   return match.group(1) if match else None

    51 

    52 def calculateChecksum(data):

    53   md5 = hashlib.md5()

    54   md5.update(normalize(data).encode('utf-8'))

    55   return base64.b64encode(md5.digest()).rstrip('=')

    56 

    57 def normalize(data):

    58   data = re.sub(r'\r', '', data)

    59   data = re.sub(r'\n+', '\n', data)

    60   data = re.sub(checksumRegexp, '', data)

    61   return data

    62 

    63 def readStream(stream):

    64   reader = codecs.getreader('utf8')(stream)

    65   try:

    66     return reader.read()

    67   except Exception, e:

    68     raise Exception('Failed reading data, most likely not encoded as UTF-8:\n%s' % e)

    69 

    70 if __name__ == '__main__':

    71   validate(readStream(sys.stdin))

