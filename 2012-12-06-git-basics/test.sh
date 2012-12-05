
if [ "$?" == "1" ]
then
	echo Usage $0 test_user
	exit -1
fi

clear
echo
echo Fake git repo wba1-2012 for user $1
echo

if [ ! -d ~/wba1-2012-test ]
then
	echo CLONE ORIGINAL wba1-2012 to ~/wba1-2012-test
	git clone --bare https://github.com/fh-koeln/wba1-2012 ~/wba1-2012-test

	# Ensure we do not push this later!
	cd ~/wba1-2012-test
	git remote rm origin
fi

if [ ! -d ~/wba1-2012-test-$1/wba1-2012 ]
then
	echo CLONE ~/wba1-2012-test to ~/wba1-2012-test-$1/wba1-2012
	git clone ~/wba1-2012-test ~/wba1-2012-test-$1/wba1-2012
fi

echo clear                       >  ~/wba1-2012-test-$1/git
echo                             >> ~/wba1-2012-test-$1/git
echo echo                        >> ~/wba1-2012-test-$1/git
echo echo \"  \" git \$\*        >> ~/wba1-2012-test-$1/git
echo echo                        >> ~/wba1-2012-test-$1/git
echo `which git` \$\*            >> ~/wba1-2012-test-$1/git
echo echo                        >> ~/wba1-2012-test-$1/git

chmod a+x ~/wba1-2012-test-$1/git

cd ~/wba1-2012-test-$1/wba1-2012

export "PATH=~/wba1-2012-test-$1:$PATH"
export "PS1=\\W $1\\$ "
bash
